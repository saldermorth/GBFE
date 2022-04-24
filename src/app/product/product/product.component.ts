import { noUndefined } from '@angular/compiler/src/util';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Cartitemsupdate } from 'src/app/Services/cartitemsupdate.service';
import { CustomerCartActiveService } from 'src/app/Services/customer-cart-active.service';
import { HttpproductService } from 'src/app/Services/Http/httpproduct.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products?: ProductService[];

  cart?: Cartitemsupdate[];
  cartItem!: Cartitemsupdate;
  found?: boolean;

  constructor(
    private httpServis: HttpproductService,
    private cartService: CustomerCartActiveService
  ) {
    this.cart = [];
    this.cartItem = { Price: 0, ProductId: 0, ProductName: ' ', Quantity: 0 };
  }

  ngOnInit(): void {
    this.httpServis
      .getProduct()
      .subscribe((Response: Array<ProductService>) => {
        this.products = Response;
        console.log(Response);
      });
  }
  returnCart() {
    if (this.cart != undefined) return this.cart[0].Price;
    return null;
  }
  cartChecker(product: ProductService) {
    if (this.cart != undefined) {
      if (this.cart.length == 0) {
        this.productSelected(product);
        return;
      }
    }
    if (this.cart != undefined) {
      this.found = false;
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].ProductId == product.id) {
          this.cart[index].Quantity += 1;
          this.found = true;
          console.log(this.cart[index].Quantity);
        }
      }
    }
    if (this.found == false) {
      this.productSelected(product);
    }
  }

  productSelected(product: ProductService) {
    if (this.cartItem != undefined)
      if (
        this.cartItem.Price != undefined ||
        this.cartItem.ProductId != undefined ||
        this.cartItem.ProductName != undefined ||
        this.cartItem.Quantity != undefined
      ) {
        this.cartItem.Price = product.price;
        this.cartItem.ProductId = product.id;
        this.cartItem.ProductName = product.productName;
        this.cartItem.Quantity = 1;
        if (this.cartItem.ProductId != 0) {
          this.cart?.push(this.cartItem);
        }
        this.cartItem = {
          Price: 0,
          ProductId: 0,
          ProductName: ' ',
          Quantity: 0,
        };
      }
    console.log(this.cart, this.cartItem);
  }
}
