const express = require('express');

const app = express();

const cbz = (req, res, next) => {
    res.write('<B>This is CBZ</B><br>');
    next();
};

const cbr = (req, res, next) => {
    res.write("<b>This is CBR</b><br>");
    next();
};
app.use("/", cbz, cbr);
app.get("/", (req, res) => {
    res.write("Hello")
    res.end();
});

app.listen(3000)