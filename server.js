var express = require('express');
var app = express();

app.use(express.static(__dirname + '/course-signup'));

app.listen(3001);
console.log('server running at port 3001');

