import { HttpClient } from '@angular/common/http';
import {Injectable, Inject} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';
import { House } from './house.mode';

@Injectable()
export class HouseService {
    constructor(private http: HttpClient) {}
    private houseUpdated = new Subject < House[] >();
    private houses: House[] = [];


    getHouses() {
        this.http.get<{message: String, houses: any}>('http://localhost:3060/api/houses')
            .pipe(map((houseData) => {
                console.log(houseData);
                return houseData.houses.map(house => {
                    return {
                        id: house._id,
                        userId: house.userId,
                        title: house.title,
                        imageUrl: house.imageUrl,
                        rental: house.rental,
                        community: house.community,
                        address: house.address,
                        description : house.description,
                        flatmattes : house.flatmattes,
                        rentalType : house.rentalType,
                        contactno : house.contactno,
                        beds : house.beds,
                        baths : house.baths,
                        veggie : house.veggie,
                        dryer : house.dryer,
                        aircontrol : house.aircontrol,
                        garage : house.garage,
                        laundary : house.laundary,
                        shuttleservice : house.shuttleservice,
                        nearby : house.nearby,
                        distance : house.distance
                    };
                });
            }))
            .subscribe((transformedData) => {
                this.houses = transformedData;
                console.log(this.houses);
                this.houseUpdated.next([...this.houses]);
            });
    }

    getHouse(idvalue: string) {
        return this.houses.find( house => house.id  === idvalue);
    }

    getHouseUpdatedListener() {
        return this.houseUpdated.asObservable();
    }

    addHouse(newHouse: any) {
        const newHouseData = {
            id: null,
            userId: newHouse.userId,
            title: newHouse.title,
            imageUrl: newHouse.imageUrl,
            rental: newHouse.rental,
            community: newHouse.community,
            address: newHouse.address,
            description : newHouse.description,
            flatmattes : newHouse.flatmattes,
            rentalType : newHouse.rentalType,
            contactno : newHouse.contactno,
            beds : newHouse.beds,
            baths : newHouse.baths,
            veggie : newHouse.veggie,
            dryer : newHouse.dryer,
            aircontrol : newHouse.aircontrol,
            garage : newHouse.garage,
            laundary : newHouse.laundary,
            shuttleservice : newHouse.shuttleservice,
            nearby : newHouse.nearby,
            distance : newHouse.distance
        };
        this.http.post<{message: String, houseId: String}>('http://localhost:3060/api/houses', newHouse)
            .subscribe((responseData) => {
                const newHouseId = responseData.houseId;
                newHouseData.id = newHouseId;
                console.log(responseData.houseId);
                console.log(newHouseData);
                this.houses.push(newHouseData);
                this.houseUpdated.next([...this.houses]);
            });
    }
}
