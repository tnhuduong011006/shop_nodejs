const siteRouter = require('./site')
const productRouter = require('./product')


function route(app) {

    // route
    app.use('/products', productRouter)

    // route
    app.use('/', siteRouter)
  
}

module.exports = route
