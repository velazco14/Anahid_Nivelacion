const express = require('express');
var bodyParser = require('body-parser')
const router = express.Router();


var urlencodedParser = bodyParser.urlencoded({ extended: true });

var productos=[
  {
      "id":1,
      "image":"micelar1.jpg",
      "precio":19,
      "title":"AGUA MICELAR"
  },
  {
      "id":2,
      "image":"micelar2.jpg",
      "precio":45,
      "title":"AGUA MICELAR EN ACEITE"
  },
  {
      "id":3,
      "image":"micelar3.jpg",
      "precio":23.99,
      "title":"AGUA MICELAR PURE ACTIVE"
  },
  {
      "id":4,
      "image":"micelar4.jpg",
      "precio":50,
      "title":"AGUA MICELAR SENSITIVE"
  },
  {
      "id":5,
      "image":"men1.png",
      "precio":16,
      "title":"ACNO FIGHT LIMPIADOR"
  },
  {
      "id":6,
      "image":"men2.png",
      "precio":17.50,
      "title":"ACNO FIGHT EXFOLIANTE"
  },
  {
      "id":7,
      "image":"men3.png",
      "precio":45,
      "title":"OIL CONTROL LIMPIADOR"
  },
  {
      "id":8,
      "image":"men4.png",
      "precio":45,
      "title":"OIL CONTROL EXFOLIANTE"
  }

];
var pedidos =[];

router.get('/productos/', (req, res) => {
    res.json(productos);
});
router.get('/pedido/', (req, res) => {
  res.status(200).json(pedidos);
});


router.post('/pedido/guardaPedido', urlencodedParser, (req, res) => {

  pedidos.push(req.body);
  res.status(201).send("Registro creado")
  });



module.exports = router;
