import { Component, Input, OnInit } from '@angular/core';
import { customer } from '../Services/customers.service';
import { HttpGetCustomerService } from '../Services/http-get-customer.service';


//auth intersepter google http intercept
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customers? : customer[];
updatedCustomer? : customer;
  constructor(private httpService : HttpGetCustomerService) { }
 @Input()
  valtPaket?: customer;
  
  ngOnInit(): void {
    this.getCustomer();
  }
onSubmit(data: customer): void {
    this.updatedCustomer = this.valtPaket;
console.log(data);
    if (!this.customers || !this.valtPaket) //not empty
    {
      return;
    }
    // const booking = new customer(this.namnet, this.bokningssvar); //skickar
    // this.bookingservice
    //   .SkickaBokning(booking)
    //   .subscribe((svar: Bokningscomfirm) => {
    //     this.result = svar;
    //   }); //får tilbaka
    // this.avbryt.emit(true);
    // //Skicka till kvitto
     }

  getCustomer(): void {
    this.httpService.getCustomers().subscribe((response: Array<customer>) => {
      this.customers = response;
      console.log(response);
    });

}
/*import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SkidItem } from 'src/app/entities/skid-paket';
import { HttpGetProductsService } from '../services/http-get-products.service';

@Component({
  selector: 'app-skid-paket-lista',
  templateUrl: './skid-paket-lista.component.html',
  styleUrls: ['./skid-paket-lista.component.scss'],
})
export class SkidPaketListaComponent implements OnInit {
  skidoritemarray?: SkidItem[];

  @Output()
  valtpaket = new EventEmitter<SkidItem>();
  constructor(private httpService: HttpGetProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.httpService.getProducts().subscribe((response: Array<SkidItem>) => {
      this.skidoritemarray = response;
      console.log(response);
    });
  }

  IncomingMessage(paket: SkidItem) {
    this.valtpaket.emit(paket);
  }*/
}
