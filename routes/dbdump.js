var express = require('express');
var router = express.Router();
const mysqldump = require('mysqldump');
const await = require('await');
const async = require('async');


/* GET home page. */
router.get('/', function(req, res, next) {
  doWork(req, res, next);
});

const doWork = async function(req,res,next)
{
    cb = await mysqldump({
    connection: {
        host: 'localhost',
        user: 'admin',
        password: 'Beagie1',
        database: 'sarkisian',
    },
    dumpToFile: 'public/data/dump.sql',
    });
  res.redirect('/data/dump.sql');
  //next();
}



module.exports = router;
