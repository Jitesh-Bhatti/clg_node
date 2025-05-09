const expr = require("express");
const path = require("path");
const multer = require("multer");

const app = expr();

app.use(expr.static('./', { index: "upload.html" }));


var store = multer.diskStorage({
    destination: "array",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: store });


app.post("/uploadfile", upload.array('file', 2), (req, res) => {
    const files = req.files;

    if (files && files.length > 0) {
        res.send(`<h1>Original Files had been uploaded</h1> ${files.length}`)
    }
});

app.listen(3000);