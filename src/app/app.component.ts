import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Alistair John Madden';

  constructor() {
    this.changeName('AJJM');
    console.log('some debug');
  }

  changeName(name:string):void {
    this.name = name;
  }
}
