'use strict';

angular.module('myApp.rollno', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rollno', {
    templateUrl: 'rollno/rollno.html',
    controller: 'rollnoCtrl'
  });
}])

.controller('rollnoCtrl', [function() {

}]);