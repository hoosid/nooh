var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', (req,res)=>{
  res.render('home');
});

router.get('/success', (req,res)=>{
  res.render('sss');
});

module.exports = router;