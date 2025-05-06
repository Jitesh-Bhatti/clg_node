var cookieParser = require("cookie-parser");
var expr = require("express");

const app = expr();
app.use(cookieParser());

app.use(expr.static("../html", {index: "form3.html"}));

app.get("/cookie", (req, res) => {
    res.set('content-type', 'text/html');
    var fname = req.query.First;
    var lname = req.query.Last;
    var password = req.query.Pass;

    res.cookie("First_Name", fname);
    res.cookie("Last_Name", lname);
    res.cookie("Password", password);
    res.redirect("/admin");
});

app.get("/admin", (req, res) => {
    res.set('content-type', 'text/html');
    res.clearCookie('Last_Name');
    res.write(`Wellcome, <b>${req.cookies.First_Name}</b><br>`);
    res.write(`Your Password : <b>${req.cookies.Last_Name}</b>`);
    res.send();
});

app.listen(3000);