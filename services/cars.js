var Car = require('./../models/car');

exports.find = function (req, res) {
    
    Car.find({}, function (err, cars) {
        if(err){
            return;
        }

        res.render('cars_list', {
            cars: cars
        });
    })

}

exports.new = function (req, res) {
    res.render('cars_new', {
        title: 'Cars New'
    });
}

exports.edit = function (req, res) {

    Car.findOne({
        _id: req.params.id
    }, function (err, car) {
        if(err){
            return;
        }

        res.render('cars_update', {
            car: car
        });
    });
}

exports.create = function (req, res) {
    Car.create(req.body, function (err, car) {
        if(err){
            return;
        }

        res.redirect("/cars");
    });
}

exports.update = function (req, res) {
    Car.findOneAndUpdate({
        _id: req.params.id
        }, req.body , function (err, car) {
        if(err){
            return;
        }

        res.redirect("/cars");
    });

}

exports.remove = function (req, res) {
    Car.remove({
        _id: req.params.id
    },function (err, car) {
        if(err){
            return;
        }

        res.redirect("/cars");
    })
}
