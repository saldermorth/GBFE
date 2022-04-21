import { Component, Input, OnInit } from '@angular/core';
import { Cartitemsupdate } from 'src/app/Services/cartitemsupdate.service';
import { HttporderService } from 'src/app/Services/httporder.service';
import { OrderService } from 'src/app/Services/order.service';
import { CustomerCartActiveService } from 'src/app/Services/customer-cart-active.service';
import { ProductService } from 'src/app/Services/product.service';
import { HttpproductService } from 'src/app/httpproduct.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orders? : OrderService[];
products? : ProductService[];
  constructor(private httpService: HttporderService, private httpProductService: HttpproductService ,private _cartItems: CustomerCartActiveService) { 
    
  }
@Input()
CRUD: number = 0;
cart ? : Cartitemsupdate[];



  ngOnInit(): void {
    this.getOrder();
this.cart = this._cartItems.getCart();
this.getProducts();


  }

  Create(){
this.CRUD =1 ;
this._cartItems.getCart()
}
getProducts():void{
 this.httpProductService.getProduct().subscribe((response: Array<ProductService>) =>{
 
 this.products = response;
 console.log(response);
 
})
}
getOrder(): void{
  this.httpService.getOrders().subscribe((response: Array<OrderService>) =>{
this.orders = response;
console.log(response);
  })  
}
createOrder(order: OrderService){
  //order.CartUpdateItems = cartitems;
  this.httpService.postOrders(order).subscribe();
}
Read(){
  this.CRUD =2 ;
  
}
}
