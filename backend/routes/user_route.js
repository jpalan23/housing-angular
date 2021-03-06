const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');

router.post("/signup",(req,res,next) =>{
    bcrypt.hash(req.body.password, 10)
        .then( hash => {
            const newSignUp = new User({
                email: req.body.email,
                password: hash,
                firstname: req.body.firstname,
                lastname: req.body.lastname
            });

            newSignUp.save().then(result =>{
                const userId =result._id.toString();
                res.status(201).json({
                    message:'user created',
                    userId: userId
                });
            }).catch(err => {
                res.status(500).json({
                    error: err,
                    message:'UniqueEmail'
                })
            });
        });
});


router.post("/login",(req,res,next) =>{
    let fetchedUser;
    User.findOne({email: req.body.email}).
        then( user => {
            if(!user){
                return res.status(401).json({
                    message: 'auth fail'
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password)
        })
        .then(result =>{
            if(!result){
                return res.status(401).json({
                    message: 'Password Failure'
                });
            }
            userId = fetchedUser._id,toString();
            console.log(userId);
            res.status(201).json({
                message:'LoggedIn',
                userId: userId
                
            });
        })
        .catch(err=>{
            return res.status(401).json({
                message: 'auth fail'
            });
        });
});


module.exports = router;