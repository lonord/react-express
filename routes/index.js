var express = require('express');
var router = express.Router();

const path = require('path');
const fs = require('fs');
const api = require('./api');

router.use('/api', api);

router.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../pages/index.html'));
});

module.exports = router;
