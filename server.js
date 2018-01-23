var express         = require('express'),
    path            = require('path'),
    mongoose        = require('mongoose'),
    logger          = require('morgan'),
    bodyParser      = require('body-parser'),
    appConfig       = require("./server/config"),
    router          = require("./server/routes/router"),
    app             = express();

//middlewares
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'application/json'}));
app.use(logger('dev'));
app.use('/', router);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
res.setHeader('Access-Control-Allow-Credentials', true); // If needed

});

// connect to db
mongoose.connect(appConfig.database, {
    useMongoClient: true
});

mongoose.connection.on('error', function(err) {
    console.log('Error: Could not connect to MongoDB');
});
mongoose.connection.once('open', function() {
    console.log('Connection to MongoDB is started');
});

// start server
app.listen(appConfig.port, function(){
    console.log('Express server listening on port 3000');
});