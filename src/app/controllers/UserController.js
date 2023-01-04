
class UserController {

    // [GET] /user
    index(req, res) {
        res.send('');
    }

    //  [GET] /user/signup
    signup(req, res) {
        res.render('signup');
    }

    //  [GET] /user/signin
    signin(req, res) {
        res.render('signin');
    }

    //  [GET] /user/profile
    profile(req, res) {
        res.render('profile');
    }
}

// Tạo ra một đối tượng UserController
// và xuất ra ngoài
module.exports = new UserController
