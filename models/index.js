var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/parking').connection;

db.on('open', function () {
    console.log('Conexão com mongodb aberta!');
})

db.on('error', function () {
    console.log('Erro ao abrir conexão com o mongodb!');
})

return db;
