var students = [];
module.exports.create = function(student, callback) {
    var existingStudent = students.find(function(e) {
        return (e.rollNo == student.rollNo);
    });
    if (!existingStudent) {
        students.push(student);
        callback(null, student);
    } else {
        callback({error: "Student with rollNo already exsiting"});
    }
};

module.exports.find = function(id, callback) {
    var existingStudent = students.find(function(e) {
        return (e.rollNo == id);
    });
    callback(existingStudent);
};

module.exports.get = function(callback) {
    callback(students);
};