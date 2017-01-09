angular.module("ies.students", ["ngRoute"])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/students', {
    templateUrl: 'students/students.html',
    controller: 'StudentsCtrl'
  });
}])

.controller('StudentsCtrl', ['$scope', '$rootScope', function(s, root) {
    s.listMode = true;
    s.studentProfiles=[{name:'Sheik', rollNo:'007', programme: root.msg, semester: 8},{name:'Sheikabdullah', rollNo:'007', programme: root.msg},{name:'Sheik', rollNo:'007', programme: root.msg},{name:'Sheik', rollNo:'007', programme: root.msg}];

    s.studentProfile = {};

    s.add = function() {
        s.listMode = false;
        s.studentProfile = {};
    };

    s.save = function() {
        s.studentProfiles.push(s.studentProfile);
        s.studentProfile = {};
        s.listMode = true;
    };
}]);