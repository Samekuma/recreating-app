import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  imageUrl: string = 'assets/Images/Profile-Image.png';
  notificationIcon: string = "/assets/Icons/notification-icon.png";
}
