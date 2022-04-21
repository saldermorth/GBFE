import { Cartitemsupdate } from "./cartitemsupdate.service";

export interface OrderService {
id: number;
customerId: number;
orderStatus: string;
cartUpdateItems: Cartitemsupdate[];
  


}

