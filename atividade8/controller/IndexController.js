class IndexController {
    static index(request, response){
        response.render('index.html');
    }
}

module.exports = IndexController;