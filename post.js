var http = require('http');
var postHTML =
'<html><head> <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"> <link rel="stylesheet" href="logstle.css"> </head>' +
'<body><div><p><div class="top-header"><span >Have an account?</span>  <h3 class="lg">LogIn</h3></p>' +
'<form action="/" method="POST"><div class="input-field">' +
'<input type="text" class="input" placeholder="Username" id="firstname" name="firstname" required><i class="bx bx-user"></i></div>' +
' <div class="input-field"><input type="password" class="input" placeholder="Password" id="password" name="password" required>   <i class="bx bx-lock-alt"></i></div>' +
'<div class="input-field"><input type="submit" class="submit" value="Login"></div>' +
'<div class="bottom"><div class="left"> <input type="checkbox" id="check"> <label for="check">Remember Me</label></div>' +
'<div class="right"> <label for="check"><a href="#">Forget your password?</a></label></div>' +
'</div></div></div></form></body></html>';  
var qs = require('querystring')
http.createServer(function (req, res) {
    res.end(postHTML);
    if (req.method == 'POST') {
        var body = "";
        req.on('data', function (data) {
            body = body + data;
        });
        req.on('end', function () {
            var post = qs.parse(body);
            console.log(post['firstname']);
            console.log(post['password']);
        });
    }
}).listen(3000);
console.log("server running");



/*var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var urlncodedParser = bodyparser.urlencoded({ extended: false });
app.post('/post_contact', urlncodedParser, function (req, res) {
    let respnse = {
        name: req.body.name,
        mail: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email
    };
    console.log(respnse);
    res.end(JSON.stringify(respnse0));
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});*/
