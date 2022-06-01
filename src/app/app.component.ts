import { Component } from '@angular/core';
import { ProCardComponent } from './pro-card/pro-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  constructor() {}
  showtable: boolean = false;
  showgrid: boolean = false;

  onValChange(value: any) {
    console.log(value);
    if (value === 'showtable') {
      this.showtable = true;
      this.showgrid = false;
    } else {
      this.showgrid = true;
      this.showtable = false;
    }
  }
}
