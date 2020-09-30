const express = require ('express');
const router = express.Router();
const messages = require('../models/message');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const message = require('../models/message');
const userController = require('../controllers/authcontroller');
// add a new rapport to the db
router.post('/m', function(req, res){
    var message = new messages(req.body);
    messages.create(req.body).then(function(messages){
        res.send(messages);
    })
});
router.get('/mymessages', async function(req, res, next) {
    var messages = await message.find(req.body);
    res.send(messages)
   });
module.exports = router;
