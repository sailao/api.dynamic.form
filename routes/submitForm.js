var express = require('express');
var router = express.Router();
var StudentRegistration = require('../model/StudentRegistration')

router
    .route('/')
    .get((req, res) => {

        res.json({ 
            code: 200, 
        })
    })
    .post((req, res) =>{
        (new StudentRegistration(req.body)).save();

        res.status(201).json({
            "code" : 201,
            "message" : "success!! complete student registration",
        });
    })

module.exports = router;