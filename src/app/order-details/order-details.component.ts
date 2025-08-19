import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{

  // Prebuilt-in method --- ActivatedRoute
  // Will be imported from the angular
  // In this ActivatedRoute, there is a property called params. Through this params property we'll take subscribe in angular using ngOnInit


  constructor(private activatedroute:ActivatedRoute){

  }


  ngOnInit(): void {
    this.activatedroute.params.subscribe((parameterData)=>{
      console.log(parameterData);
    })
  }

}
