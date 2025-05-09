const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.static(".../html", {index: "sessionform.html"}));

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000000 }
}));


app.get("/session-page", (req, res) => {
    req.session.username = req.query.name;
    req.session.password = req.query.password;
    res.redirect("/fetch-session");
});
app.get("/fetch-session", (req, res) => {
    res.set("content-type", "text/html");
    res.write(`Welcome <b>${req.session.username}</b><br>`);
    res.write(`Your Password : <b>${req.session.password}</b><br>`);
    res.write(`<a href="/delete-session">Delete Session</a>`);
    res.send();
});
app.get("/delete-session", (req, res) => {
    res.set("content-type", "text/html");
    // req.session.destroy();
    res.clearCookie('connect-sid');

    res.redirect("/homepage");
});
app.get("/homepage", (req, res) => {
    res.set("content-type", "text/html");
    res.write("<h1><b>HomePage</b></h1>");
    res.send();
});

app.listen(3000);