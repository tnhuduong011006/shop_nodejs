
const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/gumac_shop')
        console.log('Connect successfully')
    } catch (error) {
        console.log('Connect failse')
    }
}

// export object
module.exports = { connect }
