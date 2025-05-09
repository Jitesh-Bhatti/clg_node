var express = require("express");
var pug = require("pug");
const app = express();

app.set("view engine", pug);
app.get("/", (req, res) => {
    res.render(__dirname + "/form.pug")
});

app.get("/form", (req, res) => {
    res.set("Content-type", "text/html");

    res.render(__dirname + "/display.pug", req.query);
})

app.listen(3000);