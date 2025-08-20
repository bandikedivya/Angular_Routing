import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { OrderDetailsService } from '../OrderDetailsService';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{

  // Prebuilt-in method --- ActivatedRoute
  // Will be imported from the angular
  // In this ActivatedRoute, there is a property called params. Through this params property we'll take subscribe in angular using ngOnInit


  recordsList :any = [];
  constructor(private activatedroute:ActivatedRoute, private orderdetailsservice: OrderDetailsService){

  }


  ngOnInit(): void {
    this.activatedroute.params.subscribe((parameterData:any)=>{
      console.log(parameterData); //OrderId

      let orders = this.orderdetailsservice.OrderDetails();
      let orderdata = +parameterData.OrderId;
      this.recordsList = orders.filter((record)=>{ return record.Id == orderdata});
      
    })
  }

}
