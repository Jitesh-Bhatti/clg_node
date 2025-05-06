const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000000 }
}));

app.get("/", (req, res) => {
    if (req.session.pageViews) {
        req.session.pageViews++;
        res.send("Page Views : " + req.session.pageViews);
    }
    else {
        req.session.pageViews = 1
        res.send("Wellcome to this page!");
    }
});

app.listen(3000);