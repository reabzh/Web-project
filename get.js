/** const express = require('express');
const app = express();


app.get('/get_contact', function (req, res) {
    let respns = {
        name: req.body.name,
        mail: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email
    };
    console.log(respnse);
    res.end(JSON.stringify(respnse));

});
app.listen(3000, function () {
    console.log("Example app-listening on port-30001");**/
});
