const express = require('express');
const signUp = require('./routes/SignUp/SignUp');
const login = require('./routes/Login/Login');
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

app.use('/register', signUp);
app.use('/user', login);

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port
   
   console.log("Example app listening at", "127.0.0:1",port)
})