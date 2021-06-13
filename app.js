var express = require("express");
var app = express();

app.get("/url", (req,res,next) => {
  res.json(["Hello from Benjamin Asis test10"]);

});
  app.listen(3000, () => {
 console.log("Server running on port 3000");
});
