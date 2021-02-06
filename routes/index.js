var express = require('express');
var router = express.Router();

var articleModel = require('../models/articles')
var orderModel = require('../models/orders')
var userModel = require('../models/users')

/* GET home page. */
router.get('/', async function(req, res, next) {

  var emptyStocks = await articleModel.find({stock:0})

  var user = await userModel.findById('5c52e4efaa4beef85aad5e52');
  var messages = user.messages;
  
  var unreadMessages = 0;
  for(var i=0;i<messages.length;i++){
    if(messages[i].read == false){
      unreadMessages +=1
    }
  }

  var taches = user.tasks;
  var taskInprogress = 0

  for(var i=0;i<taches.length;i++){
    if(taches[i].dateCloture == null){
      taskInprogress +=1;
    }
  }

  res.render('index',{emptyStocks:emptyStocks.length,unreadMessages,taskInprogress});
});

/* GET tasks page. */
router.get('/tasks-page', async function(req, res, next) {

  var user = await userModel.findById('5c52e4efaa4beef85aad5e52');
  res.render('tasks', {taches: user.tasks});
});

/* GET Messages page. */
router.get('/messages-page', async function(req, res, next) {

  var user = await userModel.findById('5c52e4efaa4beef85aad5e52');

  res.render('messages', {messages: user.messages});
});

/* GET Users page. */
router.get('/users-page', async function(req, res, next) {

  var users = await userModel.find({status: "customer"});

  res.render('users', {users});
});

/* GET Catalog page. */
router.get('/catalog-page', async function(req, res, next) {

  var articles = await articleModel.find();

  res.render('catalog', {articles});
});

/* GET Orders-list page. */
router.get('/orders-list-page', async function(req, res, next) {

  var orders = await orderModel.find();
  
  res.render('orders-list', {orders});
});

/* GET Order detail page. */
router.get('/order-page', async function(req, res, next) {

  var order = await orderModel.findById(req.query.id)
                              .populate('articles')
                              .exec()

  res.render('order', {order});
});

/* GET chart page. */
router.get('/charts', async function(req, res, next) {
  var users = await userModel.find();
  var userMale = 0;
  var userFemale = 0;
  for(var i = 0; i<users.length; i++){
    if(users[i].gender == "male"){
      userMale ++;
    } else if(users[i].gender == "female"){
      userFemale ++;
    }
  }

  var admin = await userModel.findById('5c52e4efaa4beef85aad5e52');
  var messagesAdmin = admin.messages;
  var readMessages = 0;
  var notReadMessages = 0;

  for(var i = 0; i<messagesAdmin.length; i++){
    if(messagesAdmin[i].read == true){
      readMessages ++;
    } else {notReadMessages ++}
  }
  
  
  var ordersValid = await orderModel.find({status_payment:"validated"});
 
  var nbExp = 0;
  var nonNbExp = 0;

  for(var i=0 ; i<ordersValid.length; i++){
    if(ordersValid[i].status_shipment == true){
      nbExp ++
    } else {
      nonNbExp ++
    }
  }


  res.render('charts',{userMale,userFemale,readMessages,notReadMessages});
});







module.exports = router;
