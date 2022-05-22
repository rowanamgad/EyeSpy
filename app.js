const express = require('express');
var path = require('path');
const router = express.Router();

const app = express();
const port = process.env.PORT || "5000";

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'styles')));
 
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/views/landing.html'));
});

app.get('/home', function(req,res){
    res.sendFile(path.join(__dirname + '/views/landing.html'));
});

app.post('/game1', function(req,res){
    res.sendFile(path.join(__dirname + '/views/game1.html'));
});

app.get('/game1', function(req,res){
    res.sendFile(path.join(__dirname + '/views/game1.html'));
});

app.get('/memory1', function(req,res){
    res.sendFile(path.join(__dirname + '/views/memory1.html'));
});

app.get('/memory2', function(req,res){
    res.sendFile(path.join(__dirname + '/views/memory2.html'));
});

app.get('/match', function(req,res){
    res.sendFile(path.join(__dirname + '/views/match.html'));
});


app.get('/memory', function(req,res){
    res.sendFile(path.join(__dirname + '/views/memory.html'));
});

app.post('/match', function(req,res){
    res.sendFile(path.join(__dirname + '/views/match.html'));
});


app.post('/memory', function(req,res){
    res.sendFile(path.join(__dirname + '/views/memory.html'));
});

app.post('/landing', function(req,res){
    res.sendFile(path.join(__dirname + '/views/landing.html'));
});
app.listen(port, () => console.log(`Listening on port ${port}`));