const express = require("express");
var app = express();
    
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    router = express.Router();
    
    const connect = require("../database/db");
    const User = require("../models/schema");
    
    router.post('/imageupload', function (req, res, next) {
      console.log("=====reqData========>", req.body)  

      try {
        var chat = new Chat(req.body);
        User
          .save()
          .then((data) => {
            console.log('after save', data)
            res.send(data)
          })
          .catch((err) => {
            console.log(err);
          });
        res.sendStatus(200);
      } catch (error) {
        res.sendStatus(500);
        console.error(error);
      }  
    });
    router.get('/getimages', function (req, res, next) {
      User.find({}, function(err, Data) { 
        if(err) {
            console.log(err);
            return res.status(500).send();
        } else {
            return res.status(200).send(Data);
        }
    });
    });
    

module.exports = router;