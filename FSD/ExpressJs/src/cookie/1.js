const expr = require("express");
const path = require("path");

const app = expr();
const sp = path.join(__dirname,"../public");
app.use(expr.static(sp));

app.get("/",(req,res) => {
    res.sendFile(sp + '/server.html');
}); 

app.listen(3000);