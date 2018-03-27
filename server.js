var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var app = express();
var db = require('./models');

//Routes 
require("./app/routes/api-routes.js")(app);

//Static directory


//Sync models with db, then start server once. 
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });