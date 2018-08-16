const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./user');

const HouseSchema = new Schema({
    userId:{
        required: true,
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    title: {
        type: String,
        required: true},
    imageUrl: String,
    rental: Number,
    community: String,
    address: String,
    description: String,
    flatmattes: Number,
    rentalType: String,
    contactno: Number,
    beds: Number,
    baths: Number,
    veggie: {
        type:Boolean,
        default: false
    },
    dryer: {
        type:Boolean,
        default: false
    },
    aircontrol: {
        type:Boolean,
        default: false
    },
    garage: {
        type:Boolean,
        default: false
    },
    laundary: {
        type:Boolean,
        default: false
    },
    shuttleservice: {
        type:Boolean,
        default: false
    },
    nearby: String,
    distance: {
        type:String,
        default: "1 Mile"
    }
});

const House = mongoose.model('house',HouseSchema);

module.exports = House;