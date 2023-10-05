/*process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/'); */

const express = require('./config/express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
