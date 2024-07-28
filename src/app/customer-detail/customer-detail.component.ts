import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../MyClasses/customer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [
    CommonModule,FormsModule 
  ],
  templateUrl: "./customer-detail.component.html",
  styleUrl: './customer-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerDetailComponent {

  @Input() customer: Customer = new Customer();
  @Output() customerChange: EventEmitter<Customer> = new EventEmitter<Customer>();

  update() {
    this.customerChange.emit(this.customer);
  }
}
