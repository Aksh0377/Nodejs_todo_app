var data = [{item: 'To upload video'}, {item: "to learn node js"}, {item: "to prepare docs"}];

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();




var databaseSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo',databaseSchema);

var todoOne = Todo({item: 'buy cloths'}).save(function (err) {

    if (err) throw err;
    console.log("data saved")
})



/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('todo', { todos: data });
    console.log("fwdfwfkfr");


});

router.post('/', function(req, res, next) {
    console.log("req.body.data");
    data.push(req.body);
    res.json(data);

});

router.delete('/:item', function(req, res, next) {

    data.pop(req.params.item)
    res.json(data)

});
module.exports = router;