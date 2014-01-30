var booklApp = angular.module('bookl');

booklApp.controller('UserCtrl', function($scope, $rootScope, $location) {
    $scope.logOut = function() {
        Parse.User.logOut();
        $rootScope.sessionUser = null;
        $location.path("/login");
    };
});
