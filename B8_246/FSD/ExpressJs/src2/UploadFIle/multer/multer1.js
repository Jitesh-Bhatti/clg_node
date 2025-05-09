const express = require('express')
const multer = require('multer');
const app = express();
// SET STORAGE
var store = multer.diskStorage({
    destination: "multiple",
    filename: function (req, file, cb) {
        cb(null, file.originalname) // fieldname will change with file name myfile-the number of milliseconds since January 1, 1970”
    }
})

var upload = multer({ storage: store }).array('myfile', 5)
app.use(express.static("./", { index: "multer1.html" }))


app.post('/uploadfile', upload, (req, res) => {
    if (req.files) {
        res.set("content-type", "text/html")
        for (i of req.files) {
            res.write("<h2>File <span style='color:red'>" + JSON.stringify(i.originalname) + "</span>has been uploaded </h2>")
        }
        res.send()
    }
})
app.listen(6790);