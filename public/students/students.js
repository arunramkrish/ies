angular.module("ies.students", ["ngRoute"])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/students', {
    templateUrl: 'students/students.html',
    controller: 'StudentsCtrl'
  });
}])

.controller('StudentsCtrl', ['$scope', '$rootScope', 'StudentService', function(s, root, svc) {
    s.listMode = true;
    s.studentProfiles=[{name:'Thirus', rollNo:'14mx47', programme: 'MCA', semester: 6},{name:'Shanz', rollNo:'14mx35', programme: 'MCA', semester: 6},{name:'Basha', rollNo:'14mx58', programme: 'MCA', semester: 6}];

    s.studentProfile = {};

    s.add = function() {
        s.listMode = false;
        s.studentProfile = {};
    };
     s.get = function() {
        s.listMode = True;
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