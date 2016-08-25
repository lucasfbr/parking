exports.index = function (req, res) {
    res.render('index', {
        title: 'Home do site',
        user: req.session.user
    });
}
