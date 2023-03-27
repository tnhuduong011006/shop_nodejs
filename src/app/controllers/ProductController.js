const Product = require("../models/Product")
const Type = require("../models/Type").Type
const {mongooseToOject} = require("../../util/mongoose")
const {mutilpleMongooseToObject} = require("../../util/mongoose")
var ObjectID=require("mongodb").ObjectId

class ProductController {

    // [GET] /products/:slug show chi tiết
    show(req, res, next) {

        //Lấy tham số trên url để đối chiếu với products
        //req.params.slug
        Product.findOne({slug: req.params.slug})
            .then(product => {
                res.render('products/show', {
                    product: mongooseToOject(product),                 
                })
            })
            .catch(next)
    }

    // [GET] /products/create
    create(req, res, next) {
        Type.find({})
        .then(types =>{
            res.render('products/create',{
                types : mutilpleMongooseToObject(types)
            })
        })
    }

    // [GET] /products/:_id/edit
    edit(req, res, next) {
        // Truy xuất tất cả tên loại
        Product.findOne({_id: req.params.id})
        .then(product =>
            Type.find({})
                .then(Types =>{
                     // Tìm tên loại thông qua mã loại trong sản phẩm
                    res.render('products/edit', {
                        product: mongooseToOject(product),
                        types: mutilpleMongooseToObject(Types)
                    })
                })
                .catch(next)               
                 
        )
            // Đưa lỗi vào biến next
        .catch(next)
        
    }

    // [GET] /products/update
    update(req, res, next) {
        Product.find({})
            // Thành công đưa kết quả vào Products
            .then(Products =>{

                res.render('products/update', {
                    //Cú pháp Handlebarsjs
                    products: mutilpleMongooseToObject(Products)       
                })

            } )
            // Đưa lỗi vào biến next
            .catch(next)
    }

    // [DELETE] /products/:id
    delete(req, res, next) {
        Product.deleteOne({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)

    }

    // [POST] /products/store
    store(req, res, next) {
        console.log(req.body)

        
        // Call-back để biết lưu thành công
        // Product.save() là được
        Type.find({_id : req.body.id_loai})
            .then(type =>{
                req.body.loai = {_id : type[0]._id, name: type[0].name}
                const product = new Product({_id: req.params.id,
                    ten:  req.body.ten, // String is shorthand for {type: String}
                    gia: req.body.gia,
                    loai: req.body.loai,
                    url: req.body.url,
                    mo_ta: req.body.mo_ta})
                console.log(req.body)

                product.save()
                    // Dùng promise để biết khi nào lưu xong
                    .then(() => res.redirect('/'))
                    .catch(error => {

                    })
            }
            ).catch(next)
    
    }

    // [PUT] /products/:_id
    updateProduct(req, res, next) {
        Type.find({_id : req.body.id_loai})
            .then(type =>{
                req.body.loai = new Type({_id : type[0]._id, name: type[0].name})
                Product.updateOne({_id : req.params.id}, {
                        ten:  req.body.ten,
                        gia: req.body.gia,
                        loai: req.body.loai,
                        url: req.body.url,
                        mo_ta: req.body.mo_ta
                })
                    .then(() => res.redirect('/products/update'))
                    .catch(next)
            }
            ).catch(next)

    }

    // [GET] /filter
    filter(req, res, next) {


        Type.find({})
            // Thành công đưa kết quả vào Products
            .then(Types =>{

                Type.find({_id : req.params.id})
                    .then(type =>{
                    
                        Product.aggregate()
                            .match({'loai._id': type[0]._id})
                            .then(Products => {
                                res.render('home', {
                                    products: Products,
                                    types: mutilpleMongooseToObject(Types)               
                                })
                            })
                            .catch(next) 

                    })
                    .catch(next)
            })
            // Đưa lỗi vào biến next
            .catch(next)

    }

}

module.exports = new ProductController()
