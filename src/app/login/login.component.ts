import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

// btnlogin()
// {
//   alert('🎉Login Successful');
// }
@ViewChild('loginTextBox') loginText:ElementRef<any>;
//shows error for loginText, so, should add "strictPropertyInitialization": false in tsconfig.json file

  evnNavigate()
  {
    let name = this.loginText.nativeElement.value;


    //check whether firstname is avaliable or not
    let firstname = localStorage.getItem("firstname")

    if(firstname == name){
      console.log("You have permission");
    }
    else{
      console.log("Access Denied! Please Contact Admin Once");
    }

  }



}
