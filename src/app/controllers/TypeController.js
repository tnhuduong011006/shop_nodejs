const Product = require("../models/Product")
const Type = require("../models/Type").Type
const {mongooseToOject} = require("../../util/mongoose")
const {mutilpleMongooseToObject} = require("../../util/mongoose")

class TypeController {
    // [GET] /types/update
    update(req, res, next) {
        Type.find({})
            // Thành công đưa kết quả vào types
            .then(types =>{
                res.render('types/update', {
                    //Cú pháp Handlebarsjs
                    types: mutilpleMongooseToObject(types)       
                })

            } )
            // Đưa lỗi vào biến next
            .catch(next)
    }

    // [GET] /types/:_id
    edit(req, res, next) {
        Type.findOne({_id: req.params.id})
        .then(type =>
            res.render('types/edit', {
                type: mongooseToOject(type)
            })
        )
        .catch(next)
    }

    // [PUT] /types/:__id
    updateType(req, res, next) {
        Type.updateOne({_id : req.params.id}, req.body)
            .then(() => res.redirect('/types/update'))
            .catch(next)

    }

    // [GET] /types/create
    create(req, res, next) {
        res.render('types/create')
    }

    // [POST] /types/store
    store(req, res, next) {
        console.log(req.body)

        const type = new Type(req.body)
        // Call-back để biết lưu thành công
        // Product.save() là được
        type.save()
            // Dùng promise để biết khi nào lưu xong
            .then(() => res.redirect('/types/update'))
            .catch(error => {

            })
    
    }

    // [DELETE] /types/:id
    delete(req, res, next) {
        Type.deleteOne({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)

    }

}

module.exports = new TypeController()

