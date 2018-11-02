var express = require('express');
var fs = require('fs');
var router = express.Router();
var request = require("request");

router.get('/', function(req, res, next) {
    res.sendFile('chat.html', { root: 'public' });
});

router.get('/chat', function(req, res, next) {
    
});

module.exports = router;
