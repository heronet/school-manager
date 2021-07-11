import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';
import { UiService } from 'src/app/services/ui.service';

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

  errorMessage = "";
  private authSub: Subscription;
  constructor(private uiService: UiService, private storeService: StoreService, private authService: AuthService) { }

  ngOnInit(): void {
    this.uiService.setPeageHeader("Store");
    this.getProducts();
    this.getPermissions();
  }
  getProducts() {
    this.isLoading = true;
    this.storeService.getProducts().subscribe(products => {
      this.products = products;
      this.isLoading = false;
      this.errorMessage = "";
    }, err => {
      console.log(err);
      this.isLoading = false;
      this.errorMessage = "An Error Occured";
    })
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
  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
}
