import { Component, OnInit } from '@angular/core';
import { House } from '../house.mode';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  // @Output() houseSelectedToMainApp = new EventEmitter<House>();

  constructor() { }

  ngOnInit() {
  }

  // onHouseSelection(house: House) {
  //   this.houseSelectedToMainApp.emit(house);
  // }

}
