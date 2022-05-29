const express = require('express');
var path = require('path');
const router = express.Router();

const app = express();
const port = process.env.PORT || "5000";

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'styles')));
 
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/views/landing.html'));
});

app.get('/home', function(req,res){
    res.sendFile(path.join(__dirname + '/views/landing.html'));
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