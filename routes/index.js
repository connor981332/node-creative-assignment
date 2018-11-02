var express = require('express');
var fs = require('fs');
//var io = require('socket.io');
var router = express.Router();
var request = require("request");

router.get('/', function(req, res, next) {
    res.sendFile('chat.html', { root: 'public' });
});

router.get('/?', function(req, res, next) {
   //io.sockets.emit('update-msg', { data: 'this is only a test'});
});

module.exports = router;
