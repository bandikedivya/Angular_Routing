import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //Here Router is a class which has navigate method, used to navigate from one loc to another.
  constructor(private router: Router) {}

  navOrder() {
    this.router.navigate(['order-history']);
  }

  navtoCustSup() {
    this.router.navigate(['/customer-support']);
  }
}
