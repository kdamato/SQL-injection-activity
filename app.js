const http = require('http'),
path = require('path'),
express = require('express'),
bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
app.use(express.static('.'))
app.use(bodyPardser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const db = new sqlite3.Database(':memory:');
db.serialize(function() {
    db.run("CREATE TABLE user (username TEXT, password TEXT title TEXT)");
    db.run("INSERT INTO user VALUES ('privilegedUser', 'privilegedUser1', 'Administrator')");
});

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

//test