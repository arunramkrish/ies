'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngMaterial',
  'ui.grid',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
<<<<<<< HEAD
  'ies.students',
  'inputBasicDemo'
  
=======
  'ies.14mx47',
  'ies.students',
  'myApp.rollno'
>>>>>>> d65f0598279966827b08bf9e7e3a78e4ae94dbef
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
