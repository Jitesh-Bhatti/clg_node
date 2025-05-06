const expr = require("express");

const app = expr();

app.use(expr.static("../css"));
// app.use(expr.static("../html", {index: "form2.html"}));
app.use(expr.urlencoded({extended: false}))
app.use(expr.static("../html", {index: "form3.html"}));

app.get("/process-get", (req, res) => {
    res.set("content-type", "text/html");
    var response = req.query.text.split(".");
    for (i in response) {
        res.write(response[i]+"<br>");
    }
    res.send();
});

app.post("/process-post", (req, res) => {
    res.set("content-type", "text/html");
    var response = {
        FirstName: req.body.First,
        LastName: req.body.Last,
    }
    if(response.FirstName == "admin") {
        res.send("Hello Admin");
    }
    else{
        res.send("Please login with admin credintials")
    }
})


app.listen(3000);