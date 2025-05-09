const nm = require("nodemailer");

var trans = nm.createTransport(
    host= "smtp.gmail.com",
    port= "587",
    auth = {
        user: "",
        pass: ""
    }
)

var mailOptions = {
    from: '',
    to: '',
    subject: 'Hello',
    html: '<b>Hello world?</b>'
}

trans.sendMail(mailOptions, (error, info) => {
    if(error){
        console.error(error)
    } else {
        console.log(info)
    }
});