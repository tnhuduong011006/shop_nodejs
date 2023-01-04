const userRouter = require('./user')
const siteRouter = require('./site')


function route(app) {

    // route
    app.use('/user', userRouter)

    // route
    app.use('/', siteRouter)
  
}

module.exports = route
