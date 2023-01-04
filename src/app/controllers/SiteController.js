
class SiteController {

    // [GET] /
    home(req, res) {
        res.render('home');
    }

    //  [GET] /search
    search(req, res) {
        res.render('search');
    }

}

// Tạo ra một đối tượng SiteController
// và xuất ra ngoài
module.exports = new SiteController
