import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { CustomerCartActiveService } from './Services/customer-cart-active.service';
import { ProductComponent } from './product/product/product.component';
import { OrderComponent } from './order/order/order.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';






@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
 ProductComponent,
 OrderComponent,
 LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
