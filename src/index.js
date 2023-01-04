const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const { extname } = require('path')

const app = express()
const port = 3000

// Trỏ vào thư mục chương trình sẽ tự hiểu và trỏ vào file js
const route = require('./routes')

// Middleware sử dụng cho form
app.use(express.urlencoded({
  extended : true // option của thư viện
}))
// Middleware sử dụng cho thư viện trong JS, code JS
// vd thư viện: XMLHttpRequest, fetch, axios, ...
app.use(express.json())

// static file: image, css
app.use(express.static(path.join(__dirname,'public')))

// HTTP logger
app.use(morgan('combined'))

// Template engine - handlebars
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})