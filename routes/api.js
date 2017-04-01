/**
 * Created by lonord on 2017/3/10.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({
        msg: 'api index'
    });
});

router.get('/info', function (req, res, next) {
    res.json({
        msg: 'This is the info from `/api/info`'
    });
});

module.exports = router;