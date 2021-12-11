const express = require('express');
var bodyParser = require('body-parser')
const router = express.Router();


var urlencodedParser = bodyParser.urlencoded({ extended: true });

var productos=[
  {
      "id":1,
      "image":"mascarilla1.jpg",
      "precio":20,
      "title":"MASCARILLA DE CARBÓN"
  },
  {
      "id":2,
      "image":"mascarilla2.jpg",
      "precio":35,
      "title":"MASCARILLA DE LIMÓN"
  },
  {
      "id":3,
      "image":"mascarilla3.jpg",
      "precio":15.50,
      "title":"MASCARILLA HIDRATANTE"
  },
  {
      "id":4,
      "image":"mascarilla4.jpg",
      "precio":20.20,
      "title":"MASCARILLA DE GRANADA"
  },
  {
      "id":5,
      "image":"micelar1.jpg",
      "precio":19,
      "title":"AGUA MICELAR"
  },
  {
      "id":6,
      "image":"micelar2.jpg",
      "precio":45,
      "title":"AGUA MICELAR EN ACEITE"
  },
  {
      "id":7,
      "image":"micelar3.jpg",
      "precio":23.99,
      "title":"AGUA MICELAR PURE ACTIVE"
  },
  {
      "id":8,
      "image":"micelar4.jpg",
      "precio":50,
      "title":"AGUA MICELAR SENSITIVE"
  },
  {
      "id":9,
      "image":"men1.png",
      "precio":16,
      "title":"ACNO FIGHT LIMPIADOR"
  },
  {
      "id":10,
      "image":"men2.png",
      "precio":17.50,
      "title":"ACNO FIGHT EXFOLIANTE"
  },
  {
      "id":11,
      "image":"men3.png",
      "precio":45,
      "title":"OIL CONTROL LIMPIADOR"
  },
  {
      "id":12,
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
