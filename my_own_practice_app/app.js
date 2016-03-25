var fs = require('fs');
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));
app.set('port', (process.env.PORT || 8000));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs');

app.use('/', require(path.join(__dirname, 'routes', 'index.js')));

app.listen(app.get('port'), function(err){
	if (err) console.log(err);

	console.log("Our App is not running on port number", app.get('port'));
});

var HEROES_FILE = path.join(__dirname, 'heroes.json');



// FACEBOOK Tutorial about handling CORS shit
// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/heroes', function(req, res) {
  fs.readFile(HEROES_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/heroes', function(req, res) {
  fs.readFile(HEROES_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var heroes = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newComment = {
      id: Date.now(),
      heroName: req.body.heroName,
      realName: req.body.realName,
    };
    heroes.push(newComment);
    fs.writeFile(HEROES_FILE, JSON.stringify(heroes, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(heroes);
    });
  });
});
