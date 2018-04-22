import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { House } from '../house.mode';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: House;


  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.house = this.houseService.getHouseSelected();
  }


}
