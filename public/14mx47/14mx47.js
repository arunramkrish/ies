angular
  .module("inputBasicDemo", ["ngMaterial", "ngMessages"])

  .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/14mx47', {
    templateUrl: '14mx47/14mx47.html',
    controller: 'DemoCtrl'
  });
}])

  .controller('DemoCtrl', function($scope) {
    

    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });
  })
  .config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });