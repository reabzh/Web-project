var express = require('express');
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
});