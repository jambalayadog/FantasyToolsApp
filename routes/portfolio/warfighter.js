var express = require('express');
var router = express.Router();
var fs = require('fs')



router.get('/', function(req, res, next) {
    res.render('./portfolio/warfighter', { title: 'Table of Contents', message: 'Hello there!' });
});


module.exports = router;