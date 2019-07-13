var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'หน้าแรก' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'เกี่ยวกับ' });
});

router.get('/contect', function(req, res, next) {
  res.render('contect', { title: 'ติดต่อ' });
});
module.exports = router;
