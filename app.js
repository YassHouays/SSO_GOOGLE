const express = require("express");
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Router
const routes = require('./routes/routes');
app.use('/', routes);



server.listen(3030, () => {
    console.log(`Listening to requests on http://localhost:3030`);
});