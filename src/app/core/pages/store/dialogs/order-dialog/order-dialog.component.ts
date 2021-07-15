import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/models/Order';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent {
  quantity: number = 1;
  isLoading = false;
  orderSuccessful = false;

  constructor(
    public dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, productId: string },
    private storeService: StoreService
  ) {}
  onNoClick(): void {
    this.isLoading = false;
    this.orderSuccessful = false;
    this.quantity = 1;
    this.dialogRef.close();
  }
  onOrderClick() {
    this.isLoading = true;
    const order: Partial<Order> = {
      productId: this.data.productId,
      orderedItemsCount: this.quantity
    }
    this.storeService.orderProduct(order).subscribe(() => {
      this.isLoading = false;
      this.orderSuccessful = true;
    }, err => {
      console.log(err);
      this.isLoading = false;
      this.orderSuccessful = false;
    })
  }
}
