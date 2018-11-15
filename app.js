var express = require("express");
var app = express();
var port = 3000;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/Rachelnarios-final-project");
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/diary.html");
});

app.listen(port, () => {
 console.log("Server listening on port " + port);
});
app.use("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});

app.post("/add", (req, res) => {
 var day = new day(req.body);
 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});
