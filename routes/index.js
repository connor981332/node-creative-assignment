var express = require('express');
var fs = require('fs');
//var io = require('socket.io');
var router = express.Router();
var request = require("request");

var chat = new Array();

router.get('/', function(req, res, next) {
    res.sendFile('chat.html', { root: 'public' });
});

router.get('/getChat',function(req,res,next) {
    console.log("In getchat route");
    var newChat = req.query.q;
    if (newChat != "") {
        if (newChat != null) {
            chat.push(newChat);
        }
    }
    console.log(chat);
    res.status(200).json(chat);
});

module.exports = router;
