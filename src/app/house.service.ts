import { HttpClient } from '@angular/common/http';
import {Injectable, Inject} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { House } from './house.mode';

@Injectable()
export class HouseService {
    constructor(private http: HttpClient) {}
    private houseUpdated = new Subject < House[] >();
    private houses: House[] = [];


    getHouses() {
        this.http.get<{message: String, houses: House[]}>('http://localhost:3060/api/houses')
            .subscribe((houseData) => {
                console.log(houseData);
                this.houses = houseData.houses;
                this.houseUpdated.next([...this.houses]);
            });
    }

    getHouse(idvalue: string) {
        return this.houses.find( house => house.id  === idvalue);
    }

    getHouseUpdatedListener() {
        return this.houseUpdated.asObservable();
    }

    addHouse(newHouse: House) {
        this.houses.push(newHouse);
        console.log(newHouse);
        this.houseUpdated.next([...this.houses]);
    }
}
