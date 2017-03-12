var express = require('express');
var router = express.Router();

const path = require('path');
const fs = require('fs');
const api = require('./api');

//scan url which request file
router.get('*', function (req, res, next) {
    let filePath = path.join(__dirname, '../public', req.path);
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            //file not exist or is not type of file, then pass to next router
            next();
        }
        else {
            //is file
            res.sendFile(filePath);
        }
    });
});

router.use('/api', api);

router.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../pages/index.html'));
});

module.exports = router;