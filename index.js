//connecting to the local bakend server
const { mongo } = require('mongoose');
var app = require('./server')
var port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening to ${port}`)
})
