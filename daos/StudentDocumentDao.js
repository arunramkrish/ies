//define methods for crud
var mongodb = require('./MongodDbUtil');

module.exports.create = function (student, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, db) {
        console.log("Connection with mongodb successful");

        //using db handle, get students collection
        var studentsCollection = db.collection('students');

        //insert student record and pass the result to callback with inserted record as second argument
        studentsCollection.insert(student, function(err, result) {
            callback(err, result.ops[0]);
        });
    });
};

module.exports.find = function (id, callback) {

};

module.exports.get = function (callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, db) {
        console.log("Connection with mongodb successful");

        //using db handle, get students collection
        var studentsCollection = db.collection('students');

        //insert student record and pass the result to callback with inserted record as second argument
        studentsCollection.find({}).toArray(function(err, result) {
            callback(err, result);
        });
    });
};