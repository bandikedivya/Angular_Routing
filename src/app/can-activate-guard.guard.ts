import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
export const canActivateGuardGuard: CanActivateFn = (route, state) => {

//setting up router
let router = inject(Router);  //method to inject router. Instead of using constructor for routing, we used inject to inject router here.
  
  //let name = "Customer";

  localStorage.setItem("firstName", "Customer");

  let name = localStorage.getItem("firstName");
  if(name=="Customer")
    {
      return true;
    }
    else{
      // To navigate to login screen
      router.navigate(['/login']);
      return false;
    }
};
