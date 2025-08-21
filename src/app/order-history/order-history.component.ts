import { Component } from '@angular/core';
import { OrderService } from '../OrderService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent {
  OrdersList: any;
  constructor(private orderserivce: OrderService, private router: Router) {
    this.OrdersList = this.orderserivce.OrderDetails();
  }


  // Passing as a Parameter
  //Id is the parameter, passing item.Id as a argument to navOrderDetails() function
  navOrderDetails(id: any) {
    this.router.navigate(['order-details', id]);
 
  // Query Parameter
    this.router.navigate(['order-details'],{queryParams: {'Id': id }});

    //Fragment Parameter
    this.router.navigate(['order-details'],{fragment:id});


   }

}
