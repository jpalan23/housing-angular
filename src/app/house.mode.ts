export class House {
    public id: string;
    public imageUrl: string;
    public title: string;
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
    public shuttleservice: boolean;
    public flatmattes: number;
    public laundary: boolean;
    public userId: string;
    public address: string;

    constructor(id: string, userId: string,  imageUrl: string, title: string, rental: number, community: string, beds: number,
        baths: number, rentalType: string, veggie: boolean, description: string, contactno: string, dryer: boolean,
        aircontrol: boolean, garage: boolean, nearby: string, distance: string, shuttleservice: boolean, laundary: boolean,
        flatmattes: number, address: string)  {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.rental = rental;
    this.community = community;
    this.address = address;
    this.description = description;
    this.flatmattes = flatmattes;
    this.rentalType = rentalType;
    this.contactno = contactno;
    this.beds = beds;
    this.baths = baths;
    this.veggie = veggie;
    this.dryer = dryer;
    this.aircontrol = aircontrol;
    this.garage = garage;
    this.laundary = laundary;
    this.shuttleservice = shuttleservice;
    this.nearby = nearby;
    this.distance = distance;
    }
}
