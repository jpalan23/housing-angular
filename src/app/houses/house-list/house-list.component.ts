import { Component, OnInit, } from '@angular/core';
import { House } from '../../house.mode';
import { HousesComponent } from '../houses.component';
import { HouseService } from '../../house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css'],
})
export class HouseListComponent implements OnInit {
  houses: House[];

  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.houses = this.houseService.getHouses();
  }

  onSelect(house: House) {
    this.houseService.addToSelectedHouse(house);
  }

  getVeggieColor ( veggie: boolean) {
    const color = veggie ? 'Green' : 'Red';
    return color;
  }
}

