var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//templating engine
app.set('view engine', 'ejs');

app.use(express.static('./public')); //all the paths.
//app.use('/assets',express.static('./public'))  Specific path
//call the controller
todoController(app);

//port
app.listen(3001);
console.log('you are listening to port 30001');