var express = require('express');
var router = express.Router();
var {Lists} = require('../db.js');

/* GET home page. */
router.get('/', function(request, response, next) {
  response.render('index', { title: 'Express' });
});

router.get('/lists', function(request, response, next) {
  Lists.all().then((results) => {
    console.log(results)
    response.render('lists', {results: results})
  })
  .catch((error) => {
    console.error(error)
    response.text(error.message)
  })
})

//create a list
router.post('/lists', function(request, response, next) {
  const description = request.body.description
  console.log(description)
  Lists.insert(description)
  .then(() => {
    console.log('good')
    response.redirect('/')
  })
  .catch((error) => {
    console.error(error)
    response.text(error.message)
  })
});

//get a single list
// router.get('/lists/:id', function(req, res, next) {
//   const 
// })


//delete a list
// router.get('/delete/:id', function(res, req, next) {
//   const id = request.params.id
//   Lists.delete(id).then(() => response.redirect('/'))
// });

module.exports = router;
