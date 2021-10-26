import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddProductComponent } from "./add-product/add-product.component";
import { OrdersComponent } from "./orders/orders.component";
import { StoreComponent } from "./store.component";

const routes: Routes = [
    { 
        path: '',
        children: [
            { path: '', component: StoreComponent },
            { path: 'add-product', component: AddProductComponent },
            { path: 'orders', component: OrdersComponent },
        ]
    },
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule {}