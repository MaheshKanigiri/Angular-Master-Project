import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  customers: string[] = ['John', 'Jane', 'Doe'];

  constructor() { }

  getCustomers(): string[] {
    return this.customers;
  }

  addCustomer(name: string): void {
    this.customers.push(name);
  }
}
