import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product/product.component';
import { OrderComponent } from './order/order/order.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CustomerCartActiveService } from './Services/customer-cart-active.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
    OrderComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [authInterceptorProviders, CustomerCartActiveService],
  bootstrap: [AppComponent],
})
export class AppModule {}
