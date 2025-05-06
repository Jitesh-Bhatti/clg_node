const expr = require("express");

const app = expr();

// app.get("/",(req,res) => {
//     res.set("Content-type", "text/html");
//     res.send("<h1>Hello<h1>");
// });

// app.get("/:id",(req,res) => {
//     res.set("Content-type", "text/html");
//     res.send("<h1>Hello<h1>");
//     res.send(req.params.id);
// });

// app.get("/:id",(req,res) => {
//     res.set("Content-type", "text/html");
//     res.send(req.params.id);
// });

// app.get("/user/:userid/test/:test1",(req,res) => {
//     res.set("Content-type", "text/html");
//     res.send(req.params);
// });

// app.get("/things/:name/:id",(req,res) => {
//     res.set("Content-type", "text/html");
//     res.send(req.params);
// });
// app.get("/flights/:from-:to",(req,res) => {
//     res.set("Content-type", "text/html");
//     res.send(req.params);
// });

// var j_obj = {
//     id: 2400,
//     name: "Xyz"
// }
// app.get("/",(req,res) => {
//     res.set("Content-type", "text/html");
//     res.write(j_obj.id + " <br> " + j_obj.name);
//     res.end();
// }); 

// Write ExpressJS Script to request server to display JSON object (arrayof objects).

let object = {
    u1: [
        {name: "LJU", age:70},
        {name: "LJU", age:20},
        {name: "LJU", age:30},
        {name: "LJU", age:10},
        {name: "LJU", age:50}
    ]
}


app.get("/", (req, res) => {
    res.set("Content-type", "text/html");
    // Sort the array by age
    // Print the data of object in HTML table format
    res.write("<table border='1' cellspacing='5px' align='center'>");
    res.write("<tr><th>Name</th><th>Age</th></tr>");
    object.u1.forEach(user => {
        res.write(`<tr><td>${user.name}</td><td>${user.age}</td></tr>`);
    });
    res.write("</table>");
    res.end();
});

let sortedUsers = object.u1.sort((a,b) => a.age - b.age);

app.get("/sort", (req, res) => {
    res.set("Content-type", "text/html");
    // Sort the array by age
    // Print the data of object in HTML table format
    res.write("<table border='1' cellspacing='5px' align='center'>");
    res.write("<tr><th>Name</th><th>Age</th></tr>");
    sortedUsers.forEach(user => {
        res.write(`<tr><td>${user.name}</td><td>${user.age}</td></tr>`);
    });
    res.write("</table>");
    res.end();
});


app.listen(3000);