import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';

@Component({
  selector: 'app-customer-access',
  templateUrl: './customer-access.component.html',
  styleUrl: './customer-access.component.css'
})
export class CustomerAccessComponent implements OnInit{
  customers: string[] = [];

  constructor(private customerDataService: CustomerDataService) { }

  ngOnInit(): void {
    this.customers = this.customerDataService.getCustomers();
    //console.log(this.customers)
  }

  addCustomer(name: string): void {
    this.customerDataService.addCustomer(name);
    this.customers = this.customerDataService.getCustomers();
  }
}
