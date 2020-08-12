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
    .get('/:id', async(req, res)=>{
        var data = await (await AppForm.findById(req.params.id)).toJSON()
        res.json({ 
            code: 200, 
            message: "success", 
            data: data
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