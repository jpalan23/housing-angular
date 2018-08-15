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

    filterListing(search: string) {
        const houses = this.houses;
        if (houses.length < 1) {
            this.houseUpdated.next([...houses]);
        } else {
            const newHouses = houses.filter( house => {
                return house.title.includes(search)  || house.community.includes(search);
            });
            this.houseUpdated.next([...newHouses]);
        }
    }

    addHouse(newHouse: any, image: File) {
        console.log(image);
        const sendData = new FormData();
        sendData.append('userId', newHouse.userId);
        sendData.append('title', newHouse.title);
        sendData.append('imageUrl', newHouse.imageUrl);
        sendData.append('rental', newHouse.rental);
        sendData.append('community', newHouse.community);
        sendData.append('address', newHouse.address);
        sendData.append('description', newHouse.description);
        sendData.append('flatmattes', newHouse.flatmattes);
        sendData.append('rentalType', newHouse.rentalType);
        sendData.append('contactno', newHouse.contactno);
        sendData.append('beds', newHouse.beds);
        sendData.append('baths', newHouse.baths);
        sendData.append('veggie', newHouse.veggie);
        sendData.append('dryer', newHouse.dryer);
        sendData.append('aircontrol', newHouse.aircontrol);
        sendData.append('garage', newHouse.garage);
        sendData.append('laundary', newHouse.laundary);
        sendData.append('shuttleservice', newHouse.shuttleservice);
        sendData.append('nearby', newHouse.nearby);
        sendData.append('distance', newHouse.distance);
        sendData.append('nimage', image, newHouse.title);
        console.log(sendData);
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
        this.http.post<{message: String, houseId: String}>('http://localhost:3060/api/houses', sendData)
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
