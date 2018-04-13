import { Component, OnInit } from '@angular/core';
import { House } from '../house.mode';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: House[] = [
    { id: ' q0001', imageUrl: '../../../assets/images/avalon.jpg',
    username: 'Jay Palan', rental: 300, community: 'Avalon', beds: 2, baths: 2, rentalType: 'mix', veggie: true},
    { id: ' q0002', imageUrl: '../../../assets/images/avalon.jpg',
    username: 'Rohan Joshi', rental: 340, community: 'Circle Tower', beds: 3, baths: 2, rentalType: 'boys', veggie: false},
    { id: ' q0002', imageUrl: '../../../assets/images/avalon.jpg',
    username: 'Simaran Rajora', rental: 320, community: 'Cavilier Court', beds: 3, baths: 2, rentalType: 'girls', veggie: true},
    { id: ' q0002', imageUrl: '../../../assets/images/avalon.jpg',
    username: 'Aniket Bhosale', rental: 360, community: 'Circle Tower', beds: 3, baths: 2, rentalType: 'boys', veggie: false}
  ];

  constructor() { }

  ngOnInit() {
  }

  getVeggieColor ( veggie: boolean) {
    const color = veggie ? 'Green' : 'Red';
    return color;
  }
}

