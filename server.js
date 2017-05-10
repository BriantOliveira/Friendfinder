//node package manager reuirements 
var express = require('express'); 
var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require(' ./app/routing/htmlRoutes.js');
var bodyParser = require("body-parser"); 

//confgure express to port 300 localhost 
var app = express(); 
var PORT = process.env.PORT || 3000; 
// Sets up the express app using bodyparser to view data easily
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'})); 
// set up static file in express
app.use(express.static(path.join(__dirname, 'app/public')));

apiRoutes(app)


app .listen(PORT, function(){
	console.log("App lilstening on PORT" + PORT);
});
