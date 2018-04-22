import { Component, OnInit } from '@angular/core';
import { House } from '../house.mode';
import { HouseService } from '../house.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: House;
  id: string;


  constructor(private houseService: HouseService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    // const id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.house = this.houseService.getHouse(this.id);
    // this.id = id;
    // this.house = this.houseService.getHouseSelected();
  }


}
