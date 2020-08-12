var express = require('express');
var router = express.Router();
var StudentRegistration = require('../model/StudentRegistration')

router
    .route('/')
    .get(async(req, res, next) => {
        var formID = req.params.id
        console.log(formID)
        var form = await StudentRegistration.findOne({_id: formID})

        res.json({ 
            code: 200, 
            message: "success", 
            data: form ,
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