const expr = require("express");

const app = expr();

// app.use(expr.urlencoded({extended: false}))
app.use(expr.static("../html", {index: "subs.html"}));

const login = (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var is_sub = req.body.subs;
    console.log("Login");
    res.write(`Wellcome, ${name}`);
    res.write(`Your email id is : ${email}`);
    res.write(is_sub);
};

app.get("/login", (req, res, next) => {
    var name = req.query.name
    var email = req.query.email
    var is_sub = req.query.subs ? "Subscribed" : "Not subscribed"
    res.set("content-type", "text/html");
    res.write(`Wellcome, ${name}`);
    res.write(`<br>Your email id is : ${email}`);
    next();
});

app.get("/login", (req, res, next) => {
    const is_sub = req.query.subs ? "Subscribed" : "Not subscribed"
    // res.set("content-type", "text/html");
    if(is_sub == "Subscribed") {
        res.write("<br>Thank you for subscribing.");
        res.write("<br><a href='/'>Logout</a>");
    }
    else {
        res.write("<br><a href='/subscribe'>Subscribe</a>");
    }
    next();
});

app.get("/subscribe", (req, res, next) => {
    res.set("content-type", "text/html");
    res.write("<br>Thank you for subscribing.");
    res.write("<br><a href='/'>Logout</a>");
});

app.listen(3000);