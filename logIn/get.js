const express = require('express');
const app = express();
 app.get('/get_contact', function (req, res) {
    let respnse = {
        name: req.query.name,
        password: req.query.password
      };
    console.log(respnse);
    res.end(JSON.stringify(respnse));
  });

    app.listen(3300, function () {
     console.log('Example app listening on port 3300!');
});  