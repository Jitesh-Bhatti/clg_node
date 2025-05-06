res.write()
res.set() for writeHead()
res.send() for res.end()

res.end()
res.json()
res.redirect()
res.render()
res.sendFile()


Create 1 HTML File which contain one text field for name,, email, 3rd checkbox for subscription, 

Html file will be loaded on home page email and name field both are required fields.

Login-Page= Welcome name, 
            Your email id : 
            if subs
                Thank you for subscription.
                logout link redirect to homepage.
            else
                you can subscribe to get daily updates
                subscribe link redirect to login page.


Write express js script to set cookies of submitted values of form.
Perform following tasks: 

Form : First Name, Last Name, PAssword, submit.
Submit : "/next" => store all cookie on client side.
"/next page"

redirect user to /admin res.redirect(path) last line on next.js page

res.clear cookie for last name. and display first name



Create 1 Html file having field username password and sumbit button.

After clicking on submit button it should jump on save session page and store the user name and password in session. 

After saving session redirect to fetch session and read the values and put delete session link. and redirect to home page


Write express js script to load studet form using pug file which contain following fields

student Form 
    -name
    -email
    -course
        radio button
            -CE 
            -IT 
            -CSE 

on submit--- Data must be displayed on "/data" page using pug file.