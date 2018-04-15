import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { House } from '../house.mode';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  @Input() house: House;
  @Output() navigateHome = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  navigateToHome(event) {
    this.navigateHome = event;
  }

}
