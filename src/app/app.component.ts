import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'GBFE';
   ShowCustomer: boolean = false;
  ShowProduct: boolean = false;
 ShowOrder: boolean = false;

 ShowCustomers(){
  this.ShowCustomer = true;
  this.ShowOrder = false;
  this.ShowProduct = false;
}
 ShowProducts(){
  this.ShowCustomer = false;
  this.ShowOrder = false;
  this.ShowProduct = true;
}
 ShowOrders(){
  this.ShowCustomer = false;
  this.ShowOrder = true;
  this.ShowProduct = false;
}
}


