var express = require('express');
var app = express();
var cors = require('cors')

const http = require("http");

const port = process.env.PORT || 7080;
const server = require("http").Server(app);

const bodyParser = require("body-parser");

const router = require("./routes/userroute");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser)
app.use('/image',router)
app.use('/fimage',router)


server.listen(port, () => console.log(`Listening on port ${port}`));
