import { Injectable } from '@angular/core';
import { Cartitemsupdate } from './cartitemsupdate.service';
import { ProductService } from './product.service';

@Injectable({ providedIn: 'root' })
export class CustomerCartActiveService {
  CartItems?: Cartitemsupdate[];

  constructor() {}
  getCart() {
    return this.CartItems;
  }
  updateCart(item: ProductService) {}
}
