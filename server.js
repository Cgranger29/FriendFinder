//app dependencies

var express = require("express");
var bodyParser = require("body-parser");

//express setup
var app = express();
var PORT = process.env.PORT || 8080;

//data parsing setup

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//require route files...Need to export these modules or it will error6
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listen for server request

app.listen(PORT, function(){
    console.log("App listening on : " + PORT + " Port")
});


