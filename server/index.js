"use strict";

let path = require("path");
let express = require("express");
let validator = require("express-validator");
let bodyParser = require("body-parser");
let morgan = require("morgan");

let config = require("./config/config");

let app = express();

//noinspection MagicNumberJS
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname +'/../public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(validator());
app.use(morgan("dev"));
app.set("secret", config.secret);

// middleware
app.use(require("./middleware/authenticateMiddleware"));

// api
app.use(require("./routes/authenticationRouter"));
app.use(require("./routes/registrationRouter"));

// index
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});






