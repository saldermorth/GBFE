import { Component, Input, OnInit, Output } from '@angular/core';
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

  CRUD: number = 0;
  ShowCustomer: boolean = false;
@Output()
foundcustomer? : customer;

  ngOnInit(): void {
    this.getCustomer();
  }
Create(){
this.CRUD =1 ;
}
Read(){
  this.CRUD =2 ;
}
Update(){
this.CRUD =3 ;
}
Delete(){
this.CRUD =4 ;
}
findCustomer(data: string): void
{  
  this.httpService.getCustomerByEmail(data).subscribe((response: customer) =>{this.foundcustomer = response, console.log(this.foundcustomer)} )
}
onSubmitUpdate(data: customer){
this.httpService.updateCustomer(data).subscribe();
}

onSubmitCreate(data: customer){
this.httpService.postCustomer(data).subscribe();
}

onSubmit(data: customer): void {
    this.updatedCustomer = this.valtPaket;
console.log(data);
    if (!this.customers || !this.valtPaket) //not empty
    {
      return;
    }
}
deleteCustomer(id: customer): void{
  this.httpService.deleteCustomer(id.id).subscribe();
}
  

  getCustomer(): void {
    this.httpService.getCustomers().subscribe((response: Array<customer>) => {
      this.customers = response;
      console.log(response);
    });

  }


  
}

