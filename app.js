const express = require("express");
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');  
const passport = require('passport');
const dotenv = require('dotenv').config();

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var authentification = require('./routes/authentification');
app.use('/authentification/', authentification);

    const config = require('./oauth.js');

				passport.use('google', new GoogleStrategy({
				      clientID        : config.google.clientID,
				      clientSecret    : config.google.clientSecret,
				      callbackURL     : config.google.callbackURL,
				      profileFields: ['id', 'emails', 'name']
				    },

				    function(access_token, refresh_token, profile, done) {
				      process.nextTick(function() {
				        return done(JSON.stringify(profile));
				      });
				    }
				));
			

                // Router
const routes = require('./routes/routes');
app.use('/', routes);

server.listen(3030, () => {
    console.log(`Listening to requests on http://localhost:3030`);
});