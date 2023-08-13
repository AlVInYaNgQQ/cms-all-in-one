var express = require('express')
var router = express.Router()

const external = require('../core/external');

// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   console.log('test');
//   // console.log(req);
//   let msg = { msg: "Welcome to Vue.js App!" }
//   res.json(msg).end()
// })

module.exports.messages = function (req, res, next) {
  console.log('test messages');
  let msg = { msg: "Welcome to Vue.js App!" }
  res.json(msg).end()
};

// router.use('/abccc', router);

// module.exports = router
