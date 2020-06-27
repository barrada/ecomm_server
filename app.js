const path = require("path");
const express = require("express");
const cors = require('cors')
const db = require('./config/database');
const bodyParser = require('body-parser')

// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const app = express();
const port = process.env.PORT || "8000";

app.use(bodyParser.urlencoded({ extended: false }))
// app.set('secretKey', 'ektibApi');
// parse application/json
app.use(bodyParser.json())

app.use(cors())

// Define public folder
app.use(express.static('public'));
app.use('/uploads', express.static(__dirname + '/public/uploads'))
// Routes

var indexRouter = require('./routes/index');
var registrationRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var accountRouter = require('./routes/account');
var acceptpaymentRouter = require('./routes/acceptpayment');
// var recipesRouter = require('./routes/recipes');



app.use('/api', indexRouter);
app.use('/api/register', registrationRouter);
app.use('/api/login',loginRouter);
app.use('/api/account',accountRouter);
app.use('/api/acceptpayment',acceptpaymentRouter);
// app.use('/api/recipes/', recipesRouter);

//old sdjfsldkjflsd
// app.get("/", (req, res) => {
//   res.status(200).send("WHATABYTE: Food For Devs");
// });

// Start Server
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

module.exports = app;