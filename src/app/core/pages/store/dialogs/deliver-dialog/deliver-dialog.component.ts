import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/models/Order';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-deliver-dialog',
  templateUrl: './deliver-dialog.component.html',
  styleUrls: ['./deliver-dialog.component.scss']
})
export class DeliverDialogComponent {
  quantity: number = 1;
  deliveryMan: string = "";
  isLoading = false;
  deliveryCompleted = false;

  constructor(
    public dialogRef: MatDialogRef<DeliverDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { productName: string, orderId: string, productId: string, stock: number },
    private storeService: StoreService
  ) {}

  onNoClick(): void {
    this.isLoading = false;
    this.deliveryMan = "";
    this.quantity = 1;
    this.dialogRef.close(this.deliveryCompleted);
    this.deliveryCompleted = false;
  }
  onDeliverClick() {
    this.isLoading = true;
    const order: Partial<Order> = {
      id: this.data.orderId,
      productId: this.data.productId,
      deliveredItemsCount: this.quantity <= 0 ? 1 : this.quantity,
      deliveryMan: this.deliveryMan.trim()
    };
    this.storeService.deliverOrder(order).subscribe(() => {
      this.isLoading = false;
      this.deliveryCompleted = true;
    }, err => {
      console.log(err);
      this.isLoading = false;
      this.deliveryCompleted = false;
    });
  }
}
