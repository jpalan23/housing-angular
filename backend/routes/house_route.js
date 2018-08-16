const express = require('express');
const multer = require('multer');
const router = express.Router();
const House = require('../models/house');
const Users = require('../models/user');


const MIME_TYPE_MAP ={
    'image/png':'png',
    'image/jpeg':'jpg',
    'image/jpg':'jpg'
};

const storage =  multer.diskStorage({
    destination: (req, file, callback)=>{
        const isValid = MIME_TYPE_MAP[file.mimetype];
        console.log(isValid);
        let error = "Mime Type Error"
        if(isValid){
            error = null;
            callback(error,"backend/images");
        }else{
            res.status(401).json({
                message: 'Wrong image file'
            });
        }
    },
    filename:(req, file,cb) =>{
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_MAP[file.mimetype];
        console.log(name);
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
});


router.post("", multer({storage:storage}).single("nimage") , (req, res, next)=>{
    let fetchedUser;
    const userId =req.body.userId;
    console.log(userId);

    Users.findById(userId).then(user =>{
        fetchedUser = user;
        console.log(user + '=id:'+ user._id);
        const newHouseData = new House({
            userId: user._id,
            title: req.body.title,
            imageUrl: req.body.imageUrl,
            rental: req.body.rental,
            community: req.body.community,
            address: req.body.address,
            description : req.body.description,
            flatmattes : req.body.flatmattes,
            rentalType : req.body.rentalType,
            contactno : req.body.contactno,
            beds : req.body.beds,
            baths : req.body.baths,
            veggie : req.body.veggie,
            dryer : req.body.dryer,
            aircontrol : req.body.aircontrol,
            garage : req.body.garage,
            laundary : req.body.laundary,
            shuttleservice : req.body.shuttleservice,
            nearby : req.body.nearby,
            distance : req.body.distance
        });
        newHouseData.save().then( newHouse =>{
            fetchedUser.houselisting.push(newHouse);
            fetchedUser.save().then(()=>{
                res.status(201).json({
                message:'post added successfully'
            });
        })
        }).catch(err =>{
        console.log(err);
        res.send(err);
        });
    });
});
router.get("",(req, res, next)=>{
    House.find().then(houses =>{
        res.status(200).json({
        message:'Houses fetched successfully!',
        houses: houses
        });
    }).catch(); 
});

module.exports = router;