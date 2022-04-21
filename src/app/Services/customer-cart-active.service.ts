
import { Injectable } from '@angular/core';
import { Cartitemsupdate } from './cartitemsupdate.service';

@Injectable()

export class CustomerCartActiveService {
CartItems?: Cartitemsupdate[];

  constructor( ) {
   
  }
  getCart(){
    // newProducts: Cartitemsupdate[]
    // if(newProducts != null){
    //   newProducts.forEach(element => {
    //    this.CartItems?.push(element);
    // });
       
   
return this.CartItems;
  }
}



