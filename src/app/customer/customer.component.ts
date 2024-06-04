import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customerName: string = 'Jane Doe';
  customerAge: number = 28;
  isPremium: boolean = true;
}
