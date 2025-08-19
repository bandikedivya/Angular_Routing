import { Component } from '@angular/core';
import { OrderService } from '../OrderService';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {
 

  OrdersList:any;
  constructor(private orderserivce: OrderService)
  {
    this.OrdersList = this.orderserivce.OrderDetails();
  }
}
