import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { canActivateGuardGuard } from './can-activate-guard.guard';
import { LoginComponent } from './login/login.component';
import { deactivateGuard } from './deactivate.guard';
import { NotfoundComponent } from './notfound/notfound.component';

// Step - 1 : Should add the RouterModule under imports.
// Step - 2 : Declaring variable with Routes[path].
// Step - 3 : Adding RouterModule.forRoot(routes) [forRoot] is a predefined method for RouteModule.
const routes: Routes = [
  //Default Login Page[we mention nothing in the quotes]
  {
    path: 'login',  
    component: LoginComponent,
  },
  {
    path: '',
    //path: 'home',
    component: HomeComponent,
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent
  },
  {
    path: 'order-details',
    component: OrderDetailsComponent
  },
  {
    path: 'order-details/:OrderId',
    component: OrderDetailsComponent,
    canActivate:[canActivateGuardGuard],  // should install the guard using command: ng g g canActivateGuard
    canDeactivate: [deactivateGuard]   // should install the guard using command: ng g g Deactivate
  },
  {
    path: 'order-details/:OrderId/order-history',
    component: OrderHistoryComponent
  },
  // {
  //   path: 'order-details/:OrderId/order-history/order-details/:OrderId',
  //   component: OrderDetailsComponent
  // },
  {
    path: 'customer-support',
    component: CustomerSupportComponent
  },
  // {
  //   path: 'logout',
  //   component: LogoutComponent
  // },
  {
    path: '**',
    component: NotfoundComponent,
  }


]
@NgModule({
  declarations: [
    AppComponent,
    // LogoutComponent,
    HomeComponent,
    OrderHistoryComponent,
    CustomerSupportComponent,
    //LoginComponent,
    OrderDetailsComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
