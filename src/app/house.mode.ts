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

    constructor(id: string, imageUrl: string, title: string, rental: number, community: string, beds: number,
        baths: number, rentalType: string, veggie: boolean, description: string, contactno: string, dryer: boolean,
        aircontrol: boolean, garage: boolean, nearby: string, distance: string, shuttleservice: boolean,
        flatmattes: number)  {
    this.id = id;
    this.imageUrl = imageUrl;
    this.title = title;
    this.rental = rental;
    this.community = community;
    this.beds = beds;
    this.baths = baths;
    this.rentalType = rentalType;
    this.veggie = veggie;
    this.description = description;
    this.contactno = contactno;
    this.dryer = dryer;
    this.aircontrol = aircontrol;
    this.garage = garage;
    this.nearby = nearby;
    this.distance = distance;
    this.shuttleservice = shuttleservice;
    this.flatmattes = flatmattes;
    }
}
