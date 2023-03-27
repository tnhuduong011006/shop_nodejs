const siteRouter = require('./site')
const productRouter = require('./product')
const typeRouter = require('./type')


function route(app) {

    // route
    app.use('/products', productRouter)

    //route
    app.use('/types', typeRouter)

    // route
    app.use('/', siteRouter)
  
}

module.exports = route
