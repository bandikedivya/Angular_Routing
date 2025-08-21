import { CanActivateFn } from '@angular/router';

export const canActivateGuardGuard: CanActivateFn = (route, state) => {

  let name = "Customer";
  if(name=="Customer")
    {
      return true;
    }
    else{
      return false;
    }
};
