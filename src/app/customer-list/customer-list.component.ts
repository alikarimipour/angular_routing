import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Customer } from '../../MyClasses/customer';
import { CustomerDetailComponent } from "../customer-detail/customer-detail.component";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CommonModule,
    CustomerDetailComponent
  ],
  templateUrl: "./customer-list.component.html",
  styleUrl: './customer-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerListComponent {
  selectedCustomer: Customer = new Customer();
  customers: Customer[] = [

    { customerNo: 1, name: 'Rahuld Dravid', address: '', city: 'Banglaore', state: 'Karnataka', country: 'India' },
    { customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India' },
    { customerNo: 3, name: 'Saurrav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India' },
    { customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India' },
    { customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India' },

  ]

  showDetails(customer: Customer) {
    this.selectedCustomer = Object.assign({}, customer);
  }
  getUpdatedCustomer(cusotmer: Customer) {
    let cust = this.customers.find(e => e.customerNo == cusotmer.customerNo)
    Object.assign(cust as Customer,cusotmer);
    alert("Customer Saved")
  }
}
