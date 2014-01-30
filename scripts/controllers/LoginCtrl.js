var booklApp = angular.module('bookl');

booklApp.controller('LoginCtrl', function($scope, $rootScope, $location) {

    $scope.loginInfo = {
        password: '',
        email: 'awesome@awesome.com',
        username: 'Awesome',
    };

    $scope.signUp = function() {
        var user = new Parse.User();
        user.set("email", $scope.loginInfo.email);
        user.set("username", $scope.loginInfo.username);
        user.set("password", $scope.loginInfo.password);

        user.signUp(null, {
            success: function(user) {
                $rootScope.sessionUser = user;
                $location.path("/discover");
                $rootScope.$apply(); // Notify AngularJS to sync currentUser
            },
            error: function(user, error) {
                alert("Unable to sign up:  " + error.code + " " + error.message);
            }
        });
    };


    $scope.login = function() {
        Parse.User.logIn($scope.loginInfo.username, $scope.loginInfo.password, {
            success: function(user) {
                $rootScope.sessionUser = user;
                $location.path("/discover");
                $rootScope.$apply(); // Notify AngularJS to sync currentUser
                console.log('want to change to discovery');

            },
            error: function(user, error) {
                alert("Unable to login!  " + error.code + " " + error.message);
            }
        });
    };
});
