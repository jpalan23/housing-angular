import { Component, Output, EventEmitter } from '@angular/core';
import { House } from './house.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedHouse: House;

}
