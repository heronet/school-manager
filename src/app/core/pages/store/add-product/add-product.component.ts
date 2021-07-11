import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { StoreService } from 'src/app/services/store.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  categories: Category[] = [];
  errorMessage = "";
  isLoading = false;
  isSubloading = false;

  constructor(private uiService: UiService, private storeService: StoreService, private router: Router) { }

  ngOnInit(): void {
    this.uiService.setPeageHeader("New Product");
    this.getCategories();
  }
  getCategories() {
    this.isLoading = true;
    this.storeService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.errorMessage = "";
      this.isLoading = false;
    }, err => {
      console.log(err);
      this.errorMessage = "An Error Occured";
      this.isLoading = false;
    })
  }
  addProduct(form: NgForm) {
    const product: Partial<Product> = {
      name: form.value.name.trim(),
      price: form.value.price,
      category: form.value.category.trim()
    };
   
    this.isSubloading = true;
    this.storeService.addProduct(product).subscribe(() => {
      this.isSubloading = false
      form.resetForm();
      this.router.navigateByUrl("/store");
    }, err => {
      console.log(err);
      this.isSubloading = false;
    })
  }
  addCategory(form: NgForm) {
    const category: string = form.value.newcategory.trim();
    if(!category) return; // if category is blank, return.
    
    this.isSubloading = true;
    this.storeService.addCategory(category).subscribe(categories => {
      this.categories = categories;
      this.isSubloading = false
      form.resetForm();
    }, err => {
      console.log(err);
      this.isSubloading = false;
    })
  }
  
}
