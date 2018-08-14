import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { House } from '../../house.mode';
import { HousesComponent } from '../houses.component';
import { HouseService } from '../../house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit, OnDestroy {
  houses: House[];
  private housesSub: Subscription;

  constructor(public houseService: HouseService) { }

  ngOnInit() {
    this.houseService.getHouses();
    this.housesSub = this.houseService.getHouseUpdatedListener()
      .subscribe((houses: House[]) => {
        this.houses = houses;
      });
  }


  ngOnDestroy() {
    this.housesSub.unsubscribe();
  }

  getVeggieColor ( veggie: boolean) {
    const color = veggie ? 'Green' : 'Red';
    return color;
  }
}

