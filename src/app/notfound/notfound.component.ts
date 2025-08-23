import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute)
  {

  }


  errorName = "";

  ngOnInit(): void {
    this.activatedroute.data.subscribe((result)=>{    //[{ issueName : result[0].issueName}]
      console.log(result);
      this.errorName = result[0].issueName;   //404 Page Not Found
    })
  }
}
