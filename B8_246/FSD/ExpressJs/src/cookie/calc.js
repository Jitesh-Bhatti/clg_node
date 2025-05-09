const expr = require("express");

const app = expr();

app.use(expr.static("../css"));
app.use(expr.urlencoded({extended: false}));
app.use(expr.static("../html", {index: "calc.html"}));

app.post("/calc", (req, res) => {
    res.set("content-type", "text/html");
    var response = req.body;
    var num1 = parseInt(response.number1);
    var num2 = parseInt(response.number2);

    // Validation checks
    if (num1 == 0 || num2 == 0) {
        res.send("Please enter numbers greater than or less than 0");
    }
    else if (response.operand == "select") {
        res.send("Please select an operand");
    }
    else {
        let result;
        if (response.operand == "add") {
            result = "Addition: " + (num1 + num2);
        }
        else if (response.operand == "sub") {
            result = "Subtraction: " + (num1 - num2);
        }
        else if (response.operand == "mul") {
            result = "Multiplication: " + (num1 * num2);
        }
        else if (response.operand == "div") {
            if (num2 === 0) {
                result = "Cannot divide by zero.";
            } else {
                result = "Division: " + (num1 / num2);
            }
        }

        res.send(result);  // Send the result as a single string
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
