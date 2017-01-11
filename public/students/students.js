angular.module("ies.students", ["ngRoute"])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/students', {
    templateUrl: 'students/students.html',
    controller: 'StudentsCtrl'
  });
}])

.controller('StudentsCtrl', ['$scope', '$rootScope', 'StudentService', function(s, root, svc) {
    s.listMode = true;
    s.studentProfiles=[{name:'Sheik', rollNo:'007', programme: root.msg, semester: 8},{name:'Sheikabdullah', rollNo:'007', programme: root.msg},{name:'Sheik', rollNo:'007', programme: root.msg},{name:'Sheik', rollNo:'007', programme: root.msg}];

    s.studentProfile = {};

    s.add = function() {
        s.listMode = false;
        s.studentProfile = {};
    };

    s.save = function() {
        svc.create(s.studentProfile, function(response) {
            s.studentProfiles.push(response.data);
            s.studentProfile = {};
            s.listMode = true;
        });
    };
}])
.service('StudentService', ['$http', function($http) {
    this.create = function(student, callback) {
        var request = { 
            url: 'students',
            data: JSON.stringify(student),
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        };
        $http(request).then(callback, function() { 
            console.log('error in posting students');
        });
    };
}]);