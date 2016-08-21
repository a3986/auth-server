// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

/*var sql = require('mssql'); 


var sql = require('mssql'); 

var config = {
    user: '',
    password: '',
   // server: 'localhost\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
    //server:'SHARMA\\LOCALDB\\FF9A1EEE',
    server:'SHARMA\\LOCALDB#FF9A1EEE',
    database: 'foo'


}

var connection = new sql.Connection(config, function(err) {
    // ... error checks

// Query
console.log("Error",err);
var request = new sql.Request(connection); // or: var request = connection.request();
request.query('select 1 as number', function(err, recordset) {
    // ... error checks
    console.log("Record Set");
    console.dir(recordset);
});
});
*/

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
