import { EventEmitter } from '@angular/core';

import { House } from './house.mode';

export class HouseService {
    houseSelected = new EventEmitter<House>();

    private houses: House[] = [
        { id: 'q0001', imageUrl: '../../../assets/images/avalon.jpg', username: 'Jay Palan', rental: 300, community: 'Avalon', beds: 2,
         // tslint:disable-next-line:max-line-length
        baths: 2, rentalType: 'mix', veggie: true, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        contactno: '+1-571-778-8434', dryer: true, aircontrol: true, garage: false, nearby: 'GMU, University Mall, Main Street',
        distance: '1 Mile', shuttleservice: true, flatmattes: 5},
        { id: ' q0002', imageUrl: '../../../assets/images/avalon.jpg',
        username: 'Rohan Joshi', rental: 340, community: 'Circle Tower', beds: 3, baths: 2, rentalType: 'boys', veggie: false,
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        contactno: '+1-571-778-8434', dryer: false, aircontrol: false, garage: false, nearby: 'Safeway, Vienna Metro Station',
        distance: '1 Mile', shuttleservice: true, flatmattes: 5
      },
        { id: ' q0003', imageUrl: '../../../assets/images/avalon.jpg',
        username: 'Simaran Rajora', rental: 320, community: 'Cavilier Court', beds: 3, baths: 2, rentalType: 'girls', veggie: true,
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        contactno: '+1-571-778-8434', dryer: true, aircontrol: true, garage: true, nearby: 'Walmart, Giant',
        distance: '1 Mile', shuttleservice: true, flatmattes: 5},
        { id: ' q0004', imageUrl: '../../../assets/images/avalon.jpg',
        username: 'Aniket Bhosale', rental: 360, community: 'Circle Tower', beds: 3, baths: 2, rentalType: 'boys', veggie: false,
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        contactno: '+1-571-778-8434', dryer: true, aircontrol: true, garage: true, nearby: 'GMU, University Mall, Main Street',
        distance: '1 Mile', shuttleservice: true, flatmattes: 5}
      ];

    getHouses() {
        return this.houses.slice();
    }
}
