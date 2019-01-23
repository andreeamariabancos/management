//npm init for json-pack
var Express = require("express");//npm intall express
var BodyParser = require("body-parser"); //npm intall body-parser
var Mongoose = require("mongoose");//npm intall mongose
var BlueBird = require("bluebird");//npm intall bluebird

var app = Express();

//connecting to the database
Mongoose.connect("mongodb://localhost/ManagementSystem", function() {
	
	//request to table files
	const models = ['user', 'comments', 'sprint', 'project', 'issue' ];

	models.forEach(function(item) {
		require('./server/' + item + '/' + item + '.model')(Mongoose);
		require('./server/' + item + '/' + item + '.router')(Mongoose, app);
	});

});


app.use(Express.static(__dirname + '/client'));

app.use(BodyParser.json());

app.use(/.*\.js/, function(request, response) {
	response.sendFile(`${__dirname}/client/${request.originalUrl}`);
});
app.use(/.*\.css/, function(request, response) {
	response.sendFile(`${__dirname}/client/${request.originalUrl}`);
});
app.use(/.*\.jpg/, function(request, response) {
	response.sendFile(`${__dirname}/client/${request.originalUrl}`);
});

app.get(/^\/(?!api).*/, function(request, response) {
	let url = (request.originalUrl == '/' ? '/index' : request.originalUrl);

	response.sendFile(`./client${url}.html`, { root: __dirname });
});


app.listen(4000, function () {
	console.log(" Server started on port 4000");
});

