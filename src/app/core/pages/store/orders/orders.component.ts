import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/models/Order';
import { StoreService } from 'src/app/services/store.service';
import { UiService } from 'src/app/services/ui.service';
import { DeliverDialogComponent } from '../dialogs/deliver-dialog/deliver-dialog.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  displayedColumns: string[] = [
    'product', 
    'username',
    'roomNumber',
    'createdAt', 
    'orderQuantity', 
    'availableQuantity', 
    'deliveredQuantity',
    'delivered',
    'deliveryMan', 
    'action'
  ];
  errorMessage = "";
  isLoading = false;

  pageSize = 15;
  pageNumber = 1;
  totalOrders = 0;

  constructor(
    private uiService: UiService, 
    private storeService: StoreService, 
    public dialog: MatDialog
  ) {}
  
  ngOnInit(): void {
    this.uiService.setPeageHeader("Orders");
    this.getOrders();
  }
  getOrders() {
    this.isLoading = true;
    this.storeService.getOrders(this.pageNumber, this.pageSize).subscribe(res => {
      this.orders = res.data;
      this.totalOrders = res.count;
      this.isLoading = false;
      this.errorMessage = "";
    }, err => {
      console.log(err);
      this.errorMessage = "An Error Occured";
      this.isLoading = false;
    });
  }
  openDeliveryDialog(order: Order) {
    const dialogRef = this.dialog.open(DeliverDialogComponent, {
      disableClose: true,
      width: '250px',
      data: { productName: order.productName, productId: order.productId, orderId: order.id, stock: order.availableItemsCount }
    });

    dialogRef.afterClosed().subscribe(done => {
      if(!done) return;
      this.getOrders();
    });
  }
  onPageChange(e: any) {
    if(this.pageSize !== e.pageSize) {
      this.pageNumber = 1; // Reset pageNumber if pageSize changes
    } else {
      this.pageNumber = e.pageIndex + 1;
    }
    this.pageSize = e.pageSize;
    
    this.getOrders();
  }
}
