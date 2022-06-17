import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './Store/product-list/product-list.component';
import { OrderConfirmationComponent } from './Store/order-confirmation/order-confirmation.component';
import { ProductServiceService } from './Service/product-service.service';
import { ProductOrderServiceService } from './Service/product-order-service.service';
import { CustomerServiceService } from './Service/customer-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrderConfirmationComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductServiceService, ProductOrderServiceService, CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
