import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order/order.component';
import { ProductComponent } from './product/product/product.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Customers', component: CustomerComponent },
  { path: 'Products', component: ProductComponent },
  { path: 'Orders', component: OrderComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
