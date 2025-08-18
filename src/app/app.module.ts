import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { RouterModule, Routes } from '@angular/router';

// Step - 1 : Should add the RouterModule under imports.
// Step - 2 : Declaring variable with Routes[path].
// Step - 3 : Adding RouterModule.forRoot(routes) [forRoot] is a predefined method for RouteModule.
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent
  },
  {
    path: 'customer-support',
    component: CustomerSupportComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
  

]
@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    HomeComponent,
    OrderHistoryComponent,
    CustomerSupportComponent
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
