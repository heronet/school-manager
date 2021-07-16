import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../../material.module";
import { StoreRoutingModule } from "./store-routing.module";

import { AddProductComponent } from "./add-product/add-product.component";
import { DeleteDialogComponent } from "./dialogs/delete-dialog/delete-dialog.component";
import { DeliverDialogComponent } from "./dialogs/deliver-dialog/deliver-dialog.component";
import { OrderDialogComponent } from "./dialogs/order-dialog/order-dialog.component";
import { OrdersComponent } from "./orders/orders.component";
import { StoreComponent } from "./store.component";


@NgModule({
    declarations: [
        StoreComponent,
        AddProductComponent,
        OrdersComponent,
        OrderDialogComponent,
        DeliverDialogComponent,
        DeleteDialogComponent,
    ],
    imports: [
        MaterialModule,
        StoreRoutingModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        StoreComponent,
        AddProductComponent,
        OrdersComponent,
        OrderDialogComponent,
        DeliverDialogComponent,
        DeleteDialogComponent,
    ]
})
export class StoreModule {}