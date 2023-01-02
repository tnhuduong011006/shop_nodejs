const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const { extname } = require('path')

const app = express()
const port = 3000

// static file: image, css
app.use(express.static(path.join(__dirname,'public')))

// HTTP logger
app.use(morgan('combined'))

// Template engine - handlebars
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

// route
app.get('/', (req, res) => {
  res.render('home');
})

// route
app.get('/sign_in', (req, res) => {
  res.render('signin');
})

// route
app.get('/sign_up', (req, res) => {
  res.render('signup');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})