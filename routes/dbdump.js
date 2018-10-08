var express = require('express');
var router = express.Router();
const mysqldump = require('mysqldump');
const await = require('await');

/* GET home page. */
router.get('/', function(req, res, next) {
	mysqldump({
    connection: {
        host: 'localhost',
        user: 'admin',
        password: 'Beagie1',
        database: 'sarkisian',
    },
    dumpToFile: 'public/data/dump.sql',
	})
  res.redirect('/data/dump.sql');
});

module.exports = router;
