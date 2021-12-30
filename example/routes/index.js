var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  res.send(0);
});

router.post('/:num5', function(req, res, next){
  let num1 = req.body.a;
  let num2 = req.body.b;
  let num3 = req.body.c;
  let num4 = req.body.d;
  let num5 = Number(req.params.num5);
  let result = num1+ num2 + num3 + num4+num5;
  res.json({result : String(result)});
});

router.get('/2', function(req, res, next){
  res.send('1+2=3');
});



module.exports = router;
