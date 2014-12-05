var booklApp = angular.module('bookl', [
    'ionic',
    'ngRoute',
    'bookl.services',
    //'bookl.directives',
    'bookl.models',
    'ngTouch',
    'angularMoment',
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
        when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        }).
        when('/user', {
            templateUrl: 'templates/user.html',
            controller: 'UserCtrl'
        }).
        when('/history', {
            templateUrl: 'templates/history.html',
            controller: 'HistoryCtrl'
        }).
        otherwise({
            redirectTo: '/find'
        });
    }
]);

booklApp.run(function($rootScope, $location, BooklUser) {

        Parse.initialize("DV2g6suMjsFotZEGVUvkPth8VcVxbZS4VA09lQzi", "FVIRB1EB9wWP5HdF30L3HGkHm1w4YDj5BCEpl9a0");

        $rootScope.sessionUser = Parse.User.current();

        // register listener to watch route changes
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            if ($rootScope.sessionUser === null) {
                // no logged user, we should be going to #login
                if (next.templateUrl === "templates/login.html") {
                    // already going to #login, no redirect needed
                } else {
                    // not going to #login, we should redirect now
                    $location.path("/login");
                }
            }

            $rootScope.title = next.controller.substring(0,next.controller.length - 4);
        });

    }
);
