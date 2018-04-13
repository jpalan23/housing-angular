export class House {
    public id: string;
    public imageUrl: string;
    public username: string;
    public rental: number;
    public community: string;
    public beds: number;
    public baths: number;
    public rentalType: string;
    public veggie: boolean;
    public description: string;
    public contactno: string;
    public dryer: boolean;
    public aircontrol: boolean;
    public garage: boolean;
    public nearby: string;
    public distance: string;
    public shuttleservice: string;
    public flatmattes: number;

    constructor(id: string, imageUrl: string, username: string, rental: number, community: string, beds: number,
        baths: number, rentalType: string, veggie: boolean) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.username = username;
    this.rental = rental;
    this.community = community;
    this.beds = beds;
    this.baths = baths;
    this.rentalType = rentalType;
    this.veggie = veggie;
    }
}
