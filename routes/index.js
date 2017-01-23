var express = require('express');
var router = express.Router();
var Lists = require('../db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//create a list
router.post('/lists', function(req, res, next) {
  const description = req.body.description
  Lists.create(description).then(() => res.redirect('/'))
});

//get a single list
// router.get('/lists/:id', function(req, res, next) {
//   const 
// })


//delete a list
router.get('/delete/:id', function(res, req, next) {
  const id = req.params.id
  Lists.delete(id).then(() => res.redirect('/'))
});

module.exports = router;
