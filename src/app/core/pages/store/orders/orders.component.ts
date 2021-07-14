import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { StoreService } from 'src/app/services/store.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  displayedColumns: string[] = ['product', 'username', 'orderQuantity', 'availableQuantity', 'createdAt', 'action'];
  errorMessage = "";
  isLoading = false;

  constructor(private uiService: UiService, private storeService: StoreService) {}
  ngOnInit(): void {
    this.uiService.setPeageHeader("Orders");
    this.getOrders();
  }
  getOrders() {
    this.isLoading = true;
    this.storeService.getOrders().subscribe(res => {
      this.orders = res;
      this.isLoading = false;
      this.errorMessage = "";
    }, err => {
      console.log(err);
      this.errorMessage = "An Error Occured";
      this.isLoading = false;
    });
  }

}
