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

  get statusColor(): string {
    switch (this.status) {
      case 'active':
        return 'blue';
      case 'inactive':
        return 'gray';
      case 'pending':
        return 'orange';
      default:
        return 'black';
    }
  }

  get statusMessage(): string {
    switch (this.status) {
      case 'active':
        return 'Active Customer';
      case 'inactive':
        return 'Inactive Customer';
      case 'pending':
        return 'Pending Customer';
      default:
        return 'Unknown Status';
    }
  }
}
