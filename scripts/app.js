var booklApp = angular.module('bookl', [
    'ionic',
    'ngRoute',
    'booklControllers',
    'bookl.services',
]);

booklApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        }).
        when('/find', {
            templateUrl: 'templates/find.html',
            controller: 'FindCtrl'
        }).
        when('/discover', {
            templateUrl: 'templates/discover.html',
            controller: 'DiscoverCtrl'
        }).
        // when('/login', {
        //     templateUrl: 'templates/login.html',
        //     controller: 'LoginCtrl'
        // }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);


booklApp.run(['$rootScope',
    function($rootScope, $location) {

        Parse.initialize("zGZLPGMFijXnh1MSGfuH36idkutOZMtbYHFhmwSo", "BoLsf9LDgfwH27wFH7G6tKNeUTb2PaXBcYLQiw1H");
        console.log('parse initied');

        // $rootScope.currentUser = Parse.User.current();

        // // register listener to watch route changes
        // $rootScope.$on('$routeChangeStart', function(event, next, current) {
        //     if ($rootScope.user === null) {
        //         // no logged user, we should be going to #login
        //         if (next.templateUrl === "templates/login.html") {
        //             // already going to #login, no redirect needed
        //         } else {
        //             // not going to #login, we should redirect now
        //             $location.path("/login");
        //         }
        //     }
        // });

        // $rootScope.signUp = function(form) {
        //     var user = new Parse.User();
        //     user.set("email", form.email);
        //     user.set("username", form.username);
        //     user.set("password", form.password);

        //     user.signUp(null, {
        //         success: function(user) {
        //             $rootScope.currentUser = user;
        //             $rootScope.$apply(); // Notify AngularJS to sync currentUser
        //         },
        //         error: function(user, error) {
        //             alert("Unable to sign up:  " + error.code + " " + error.message);
        //         }
        //     });
        // };

        // $rootScope.logOut = function(form) {
        //     Parse.User.logOut();
        //     $rootScope.currentUser = null;
        // };
    }
]);
