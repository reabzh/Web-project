var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var urlncodedParser = bodyparser.urlencoded({ extended: false });
app.post('/post_contact', urlncodedParser, function (req, res) {
    let respnse = {
        name: req.body.name,
        password: req.body.password
      };
    console.log(respnse);
    res.end(JSON.stringify(respnse));
});
app.listen(3000, function () {
    console.log('Example app post listening on port 3000!');
});  
