const Product = require("../models/Product")
const Type = require("../models/Type")
const {mongooseToOject} = require("../../util/mongoose")
const {mutilpleMongooseToObject} = require("../../util/mongoose")

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

        res.render('products/create')
    }

    // [GET] /products/:id/edit
    edit(req, res, next) {
        Product.findOne({id: req.params.id})
        .then(product =>{
            res.render('products/edit', {
                product: mongooseToOject(product)
            })
        })
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
        Product.deleteOne({id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)

    }

    // [POST] /products/store
    store(req, res, next) {
        const product = new Product(req.body)
        // Call-back để biết lưu thành công
        // Product.save() là được
        product.save()
            // Dùng promise để biết khi nào lưu xong
            .then(() => res.redirect('/'))
            .catch(error => {

            })

    }

    // [PUT] /products/:id
    updateProduct(req, res, next) {
        Product.updateOne({id : req.params.id}, req.body)
            .then(() => res.redirect('/products/update'))
            .catch(next)

    }

    // [GET] /filter
    filter(req, res, next) {


        Type.find({})
            // Thành công đưa kết quả vào Products
            .then(Types =>
                res.render('products/filter', {
                    //Cú pháp Handlebarsjs
                    types: mutilpleMongooseToObject(Types)            
                })
            )
            // Đưa lỗi vào biến next
            .catch(next)

    }

    showType(req, res, next) {

        //Lấy tham số trên url để đối chiếu với products
        req.params.slug
        Product.find({loai: req.params.id})
            .then(Products => {
                res.render('products/filter', {
                    products: mutilpleMongooseToObject(Products)                 
                })
            })
            .catch(next)
           
    }

}

module.exports = new ProductController()
