var path = require("path");

 // index route loads view.html
 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });