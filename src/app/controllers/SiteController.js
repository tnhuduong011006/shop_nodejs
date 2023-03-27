const Product = require("../models/Product")
const Type = require("../models/Type").Type
const {mutilpleMongooseToObject} = require("../../util/mongoose")

class SiteController {

    // [GET] /
    home(req, res, next) {


        Product.find({})
            // Thành công đưa kết quả vào Products
            .then(Products =>{
                Type.find({})
                    .then(types =>{
                        res.render('home', {
                            //Cú pháp Handlebarsjs
                            products: mutilpleMongooseToObject(Products),
                            types: mutilpleMongooseToObject(types)
                        })
                    })
                    .catch(next)
            })
            // Đưa lỗi vào biến next
            .catch(next)

    }

    //  [GET] /search
    search(req, res) {
        res.render('search');
    }

}

// Tạo ra một đối tượng SiteController
// và xuất ra ngoài
module.exports = new SiteController
