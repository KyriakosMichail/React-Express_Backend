var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {   id: 1, username: "Kyriakos Michael " },
    {   id: 2, username: "My second User" }

  ])
});

module.exports = router;
