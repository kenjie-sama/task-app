import { Component } from '@angular/core';

@Component({
  selector: `app-navbar`,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent {
  public Alert(message: string): void {
    alert('You clicked ' + message);
  }
}
