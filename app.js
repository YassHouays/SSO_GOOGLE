const express = require("express");
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');  
const passport = require('passport');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Router
const routes = require('./routes/routes');
app.use('/', routes);
var authentification = require('./routes/authentification');
app.use('/authentification/', authentification);

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
				var config = require('./oauth.js');

				passport.use('google', new GoogleStrategy({
				      clientID        : config.google.clientID,
				      clientSecret    : config.google.clientSecret,
				      callbackURL     : config.google.callbackURL,
				      profileFields: ['id', 'emails', 'name']
				    },

				    function(access_token, refresh_token, profile, done) {
				      process.nextTick(function() {
				        Account.findOne({ 'username' : profile.emails[0].value }, function(err, user) {
				          if (err)
				            return done(err);
				          if (user) {
				            if (err)
				              return done(err);
				            else
				              return done(null, user);
				          } else {
				            if (err)
				              return done(err);

				            Account.register(new Account({ username : profile.emails[0].value }), profile.id, function(err, account) {
				              if (err)
				                return done(err);
				              else
				                return done(null, account);
				            });
				          }
				        });
				      });
				    }
				));
			

server.listen(3030, () => {
    console.log(`Listening to requests on http://localhost:3030`);
});