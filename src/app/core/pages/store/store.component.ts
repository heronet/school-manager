import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';
import { UiService } from 'src/app/services/ui.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from './dialogs/order-dialog/order-dialog.component';
import { Order } from 'src/app/models/Order';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  isLoading = false;
  canAdd = false;
  canModify = false;
  canDelete = false;
  isStoreKeeper = false;

  pageSize = 15;
  pageNumber = 1;
  totalProducts = 0;
  productName = "";

  errorMessage = "";
  private authSub: Subscription;
  constructor(
    private uiService: UiService, 
    private storeService: StoreService,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.uiService.setPeageHeader("Store");
    this.getProducts();
    this.getPermissions();
  }
  getProducts() {
    this.isLoading = true;
    this.storeService.getProducts(this.productName, this.pageNumber, this.pageSize).subscribe(res => {
      this.products = res.data;
      this.totalProducts = res.count;
      this.isLoading = false;
      this.errorMessage = "";
    }, err => {
      console.log(err);
      this.isLoading = false;
      this.errorMessage = "An Error Occured";
    })
  }
  searchProduct(form: NgForm) {
    const name = form.value.search.trim();
    this.productName = name;
    this.pageNumber = 1;
    this.getProducts();
  }
  getPermissions() {
    this.authSub = this.authService.authData$.subscribe(data => {
      if(data) {
        if(data.claims?.includes("products.add"))
          this.canAdd = true
        if(data.claims?.includes("products.modify"))
          this.canDelete = true
        if(data.claims?.includes("products.delete"))
          this.canDelete = true
        if(data.roles?.includes('StoreKeeper')) this.isStoreKeeper = true;
      } else {
        this.canAdd = false;
        this.canDelete = false;
        this.canModify = false;
        this.isStoreKeeper = false;
      }
    })
  }
  deleteProduct(id: string, index: number) {
    this.isLoading = true;
    this.storeService.deleteProduct(id).subscribe(() => {
       this.products.splice(index, 1);
       this.isLoading = false;
    }, err => {
      console.log(err);
      this.isLoading = false;
    })
  }

  // UI 
  openOrderDialog(product: Product) {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '250px',
      data: { name: product.name, productId: product.id }
    });

    dialogRef.afterClosed().subscribe(quantity => {
      
    });
  }
  onPageChange(e: any) {
    if(this.pageSize !== e.pageSize) {
      this.pageNumber = 1; // Reset pageNumber if pageSize changes
    } else {
      this.pageNumber = e.pageIndex + 1;
    }
    this.pageSize = e.pageSize;
    
    this.getProducts();
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
}