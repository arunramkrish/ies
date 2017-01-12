//var studentDao = require('../daos/StudentDao');
var studentDao = require('../daos/StudentDocumentDao');

module.exports.createStudent = function(student, callback) {
    studentDao.create(student, callback);
};

module.exports.getStudentByRollNo = function(rollNo, callback) {
    studentDao.find(rollNo, callback);
};

module.exports.getAllStudents = function(callback) {
    studentDao.get(callback);
};