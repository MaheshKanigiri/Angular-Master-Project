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

  orders: string[] = ['Order 1', 'Order 2', 'Order 3'];

  status: string = 'active'; // could be 'active', 'inactive', 'pending'
}
