import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { StoreService } from 'src/app/services/store.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products: Product[] = [];
  isLoading = false;
  erroeMessage = "";
  constructor(private uiService: UiService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.uiService.setPeageHeader("Store");
    this.getProducts();
  }
  getProducts() {
    this.isLoading = true;
    this.storeService.getProducts().subscribe(products => {
      this.products = products;
      this.isLoading = false;
      this.erroeMessage = "";
    }, err => {
      console.log(err);
      this.isLoading = false;
      this.erroeMessage = "An Error Occured";
    })
  }

}
