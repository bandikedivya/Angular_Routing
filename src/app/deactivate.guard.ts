import { CanDeactivateFn } from '@angular/router';

//To create this file, should use ng g g Deactivate, then unselect( this * ) using spacebar and shift + down arrow and spacebar(then this * will come on deactive option) then enter.
// This will create deactivate guard.
export const deactivateGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  //return true;

  var isStatus = window.confirm('Do you want to Navigate??');
  if (isStatus) {
    console.log('OK');
    return true;
  } else {
    console.log('!!!');
    return false;
  }
};
