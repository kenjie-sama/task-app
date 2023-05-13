import { Component } from '@angular/core';

@Component({
  selector: `navbar`,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBar {
  public Alert(message: string): void {
    alert('You clicked ' + message);
  }
}
