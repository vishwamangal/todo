var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://vishwa:vishwa123@ds157853.mlab.com:57853/todo');

//create schema for database
var todoschema = new mongoose.Schema({
	item: String
});
//create model or collection
var Todo = mongoose.model('Todo', todoschema);

module.exports = function(app) {

app.get('/todo', function(req, res){
	//get all data from collection of Todo
	Todo.find({}, function(err, data) {
		if(err) throw err;
		res.render('todo',{todos:data});
	}); 
});

app.post('/todo', urlencodedParser,function(req, res){
	//save data to database.
	var newTodo = Todo(req.body).save(function(err,data) {
		if(err) throw err;
		res.json(data);
	});
});

app.delete('/todo/:item', function(req, res){
	Todo.find({item:req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
		if(err) throw err;
		res.json(data);
	});
});
};