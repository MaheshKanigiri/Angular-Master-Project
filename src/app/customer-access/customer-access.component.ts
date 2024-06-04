import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';

@Component({
  selector: 'app-customer-access',
  templateUrl: './customer-access.component.html',
  styleUrl: './customer-access.component.css'
})
export class CustomerAccessComponent implements OnInit{
  customers: string[] = [];
  editingIndex: number | null = null;
  editingName: string = '';
  customerName: any;

  constructor(private customerDataService: CustomerDataService) { }

  ngOnInit(): void {
    this.customers = this.customerDataService.getCustomers();
    //console.log(this.customers)
  }

  addCustomer( customerName: string): void {
    this.customerDataService.addCustomer( customerName);
    this.customers = this.customerDataService.getCustomers();
  }

  startEditing(index: number): void {
    this.editingIndex = index;
    this.editingName = this.customers[index];
  }

  updateCustomer(): void {
    if (this.editingIndex !== null) {
      this.customerDataService.updateCustomer(this.editingIndex, this.editingName);
      this.customers = this.customerDataService.getCustomers();
      this.editingIndex = null;
      this.editingName = '';
    }
  }

  deleteCustomer(index: number): void {
    this.customerDataService.deleteCustomer(index);
    this.customers = this.customerDataService.getCustomers();
  }
}
