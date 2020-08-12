var express = require('express');
var router = express.Router();
var AppForm = require("../model/AppForm");

router
    .get('/', async(req, res)=>{
        var appForms = await AppForm.find({}).select('title _id');
        
        res.json({ 
            code: 200, 
            message: "success", 
            data: appForms 
        })
    })
    .post('/', (req, res, next) =>{
        (new AppForm).save
        var appForm = new AppForm(req.body);
        appForm.save();

        res.status(201).json({
            "code" : 201,
            "message" : "success!! form is created",
        });
    })
    .get('/:id', (req, res)=>{
        res.json({ 
            code: 200, 
            message: "success", 
            data: {
                "id": req.params.id,
                "title": "My Form", 
                "action": {
                    "store": {
                        "url": "/form/:id/submit",
                        "method": "POST"
                    },
                    "get": {
                        "url": "/form/:id/submit",
                        "method": "GET"
                    }
                },
                "primary-color": "#000000",
                "formComponent": [
                    {"name": "Student Name", "type":"text", "placeHolder": "Enter user name"},
                    {"name": "Student Name", "type":"text"}
                ]
            }
        })
    })
    .get('/:id/submit', (req, res)=>{
        res.json({ 
            code: 200, 
            message: "success", 
            data: [
                {"id": req.params.id},
                {"id": req.params.id}
            ]
        })
    })
    .post('/:id/submit', (req, res)=>{
        res.json({
            code: 201, 
            message: "success!! created", 
            data: {
                "id": req.params.id,
                "name": "Alic", 
                "email": "alic@examplemail.com",
                "phone": "09444558741"
            } 
        })
    }) 

module.exports = router;