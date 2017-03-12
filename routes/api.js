/**
 * Created by lonord on 2017/3/10.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.end('api index\n');
});

module.exports = router;