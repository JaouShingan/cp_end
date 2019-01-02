var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const list = [];
  const length = (Math.random() * 100).toFixed(0);
  for (let i = 0; i < length; i++) {
    list.push({
      name: `商品${i + 1}`,
      price: (Math.random() * 100).toFixed(2)
    });
  }
  res.json({
    list: list,
    date: new Date
  });
});

module.exports = router;