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

  updateCustomer(index: number, name: string): void {
    if (index >= 0 && index < this.customers.length) {
      this.customers[index] = name;
    }
  }

  deleteCustomer(index: number): void {
    if (index >= 0 && index < this.customers.length) {
      this.customers.splice(index, 1);
    }
  }
}
