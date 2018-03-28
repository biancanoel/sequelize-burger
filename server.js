var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8082;
var app = express();
var db = require('./models');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Routes 
require("./app/routes/api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);


//Sync models with db, then start server once. 
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });