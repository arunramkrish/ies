angular.module("ies.14mx47", ["ngRoute"])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/14mx47', {
    templateUrl: '14mx47/14mx47.html',
    controller: 'StudentsCtrl1'
  });
}])
.controller('StudentsCtrl1', ['$scope', '$rootScope', 'StudentService', function(s, root, svc) {
    s.listMode = true;
    s.studentProfiles=[{name:'Thirus', rollNo:'14mx47', passw1: 'MCA', passw2: 'MCA'}];

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