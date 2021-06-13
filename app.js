var express = require("express");
var app = express();

app.get("/url", (req,res,next) => {
  res.json(["Testing autobuild and deploy using jenkins"]);

});
  app.listen(3000, () => {
 console.log("Server running on port 3000");
});
