var express = require('express');
var router = express.Router();
var AppForm = require("../model/AppForm");
var Model = require("../model/Model");
var {model, Schema} = require('mongoose');

router
    .get('/', async(req, res)=>{
        var appForms = await AppForm.find({}).select('title _id');
        
        res.json({ 
            code: 200, 
            message: "success", 
            data: appForms 
        })
    })
    .post('/', async(req, res, next) =>{

        var createAppForm = await (new AppForm(req.body)).save();

        var createFormModel = await (new Model({
            form: createAppForm.toJSON()._id,
            model: createAppForm.toJSON().form.formName.replace(/\s/g, ''),
            rawSchema: createAppForm.toJSON()
        })).save();

        res.status(201).json({
            "code" : 201,
            "message" : "success!! form is created",
        });
    })
    .get('/:id', (req, res)=>{
        AppForm.findById(req.params.id, (err, data)=> {
            if(err){
                res.json({
                    "code": 500,
                    "message": "db error"
                })
            }else if(data){
                res.json({ 
                    code: 200, 
                    message: "success", 
                    data: data.toJSON()
                })
            }else{
                res.json({
                    "code": 404,
                    "message": "id not exist"
                })
            }
        });
    })
    .get('/:id/submit', (req, res)=>{
        Model.findOne({form:req.params.id}, (err, data)=> {
            if(err){
                console.log(err)
                res.json({
                    "code": 500,
                    "message": "database error"
                })
            }else if(data){
                model(data.model,(new Schema({},{strict: false}))).find((err, data)=>{
                    if(err || !data.length) res.json({code: 404});
                    res.json({ 
                        code: 200, 
                        message: "success", 
                        data: data || data.toJSON()
                    })
                })
                
            }else{
                res.json({
                    "code": 404,
                    "message": "id not exist"
                })
            }
        }); 
    })
    .post('/:id/submit', (req, res)=>{
        Model.findOne({form:req.params.id}, (err, data)=> {
            if(err){
                console.log(err)
                res.json({
                    "code": 500,
                    "message": "database error"
                })
            }else if(data){
                (new model(data.model,(new Schema({},{strict: false}))))(req.body).save((err, data)=>{
                    if(err || !data.length) res.json({code: 404})
                    res.json({"code": 201})
                })
                
            }else{
                res.json({
                    "code": 404,
                    "message": "id not exist"
                })
            }
        }); 
    }) 

module.exports = router;