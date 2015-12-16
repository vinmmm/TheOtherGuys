var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    characterController = require('./server/controllers/character-controller');
    charactersController = require('./server/controllers/characters-controller');



app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/img', express.static(__dirname + '/client/img'));
app.use('/css', express.static(__dirname + '/client/css'));

//REST API
app.get('/api/character', characterController.list);
app.post('/api/characters', charactersController.create);



app.listen(4000, function() {
  console.log('I\'m Listening...');
})
