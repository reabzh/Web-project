const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://0.0.0.0:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const contactSchema = {
    name: String,
    passowrd: String,
};

const Contact = mongoose.model("Contact", contactSchema);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/'));

app.get("/post_contact", function (req, res) {
    res.render("Contact");
});

app.post("/post_contact", function (req, res) {
    
    console.log(req.body.name);
    console.log(req.body.password);
    
    const contact = new Contact({
        name: req.body.name,
        password: req.body.password,
    });
    
    contact.save(function (err) {
        if (err) {
            throw err;
        } else {
            res.render("Contact");
        }
    });
});

app.listen(9999, function () {
    console.log("App is running on Port 9999");
});

