var express = require("express");
var pug = require("pug");
const app = express();

app.set("view engine", pug);

app.get("/", (req, res) => {
    res.render(__dirname + "/studentForm.pug")
});


app.get("/form", (req, res) => {
    res.set("Content-type", "text/html");

    res.render(__dirname + "/studentDisplay.pug", req.query);
})

app.listen(3000);