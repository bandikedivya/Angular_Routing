import { Component, ElementRef, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router:Router){

  }

  @ViewChild('loginTextBox')  loginText:ElementRef<any>;


  evtLogin(){

     let name = this.loginText.nativeElement.value;

     let firstName =  localStorage.getItem("firstName");

     if(firstName  == name){
        console.log("Access Granted!");
        this.router.navigate(['../order-history']);
     }

     else{
      console.log("Access Denied! Please contact your Admin");
       localStorage.setItem('firstName', 'Customer');
      //localStorage.setItem("firstName","Madan");
     }



  }

}
