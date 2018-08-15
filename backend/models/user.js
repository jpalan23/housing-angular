const mongoose = require('mongoose');
const HouseSchema = require('./house');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    houselisting:[{
        type: Schema.Types.ObjectId,
        ref:'house'
    }]
});

UserSchema.plugin(uniqueValidator);

const Users = mongoose.model('users', UserSchema);

module.exports = Users;