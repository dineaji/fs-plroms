const express = require('express');
const hbs = require('hbs');
const PORT = process.env.PORT || 3001;

const app = express();

var routes = require('./routing/route');
app.use('/', routes);

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


app.listen(PORT, ()=>{
  console.log(`Server started on port: ${PORT}`)
})


app.get('/', function (req, res) {
  res.send('Hello World!')
})
