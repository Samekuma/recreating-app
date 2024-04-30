import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  btnTitle = 'Create New'
  searchIcon: string = 'assets/Icons/search-icon.svg'
}
