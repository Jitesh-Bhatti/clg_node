var cookieParser = require("cookie-parser");
var expr = require("express");


const app = expr();

app.use(cookieParser());

app.get("/", (req, res) => {
    res.set('content-type', 'text/html');
    res.cookie("fname", "Sasuke");
    res.cookie("lname", "Uchiha");
    res.cookie("email", "sasukeuchiha@gmail.com", {maxAge: 5000});
    res.cookie("village", "Village Hidden in the Leaves.");
    res.cookie("contact", "6351226654", {expires: new Date(Date.now() + 10000)})
    res.send("Cookies set");
});

app.get("/cookie", (req, res) => {
    res.set('content-type', 'text/html');
    res.write(req.cookies.fname + "<br>");
    res.write(req.cookies.lname + "<br>");
    res.write(req.cookies.email + "<br>");
    res.write(req.cookies.village + "<br>");
    res.write(req.cookies.contact + "<br>");
    res.send();
});

app.get("/clear", (req, res) => {
    res.set('content-type', 'text/html');
    res.clearCookie(req.cookies.email);
    res.clearCookie(req.cookies.contact);
    res.send();
});
app.listen(3000);