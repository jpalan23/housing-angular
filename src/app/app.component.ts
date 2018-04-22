import { Component, OnInit } from '@angular/core';
import { House } from './house.mode';
import { HouseService} from './house.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selectedHouse: House;

  constructor(private houseService: HouseService) {

  }

  ngOnInit() {
    // this.houseService.houseSelected.subscribe(
    //   (house: House) => {
    //     this.selectedHouse = house;
    //   }
    // );
  }
}
