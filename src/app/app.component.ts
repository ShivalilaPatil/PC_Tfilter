// import { Component } from '@angular/core';
// import { SelectItem } from 'primeng/api';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent  {
//   types : SelectItem[];
//   // types :any;
//   selectedType: any ;

//   constructor() {
//       this.types = [
//           {label: 'Button A', value: 'A'},
//           {label: 'Button B', value: 'B'}
//       ];
// }

// }

import { Component } from '@angular/core';
import { ProCardComponent } from './pro-card/pro-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
