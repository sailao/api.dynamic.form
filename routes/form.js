var express = require('express');
var router = express.Router();
var AppForm = require("../model/AppForm");

/* GET users listing. */
router
    .route('/')
    .post((req, res, next) =>{
        var appForm = new AppForm();
        // appForm.title = req.body.title;
        // appForm.formComponent = req.body.formComponent;
        appForm.save(req.body);


        res.status(201).json({
            "code" : 201,
            "message" : "success!! form is created",
        });
    })
    .get(async(req, res)=>{
        var appForms = await AppForm.find({})
        res.json({ code: 200, message: "success", data: appForms })
        // AppForm.find({}).exec(function (err, issues) {
        //     if (err)
        //         console.log(err);
        //     else
        //         console.log("successfully requested");
        //         res.json(issues);
        // });
        // AppForm.find({})
        //             .select('username email phone address')
        //             .then(data=>res.json({ code: 200, message: "success", data: data }))
    });

module.exports = router;