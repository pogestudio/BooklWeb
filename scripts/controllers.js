var controllers = angular.module('booklControllers', []);

controllers.controller('FindCtrl', function($scope, FetchBooks, $ionicModal) {



    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/read.html', function(modal) {
        $scope.modal = modal;
    }, {
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });

    $scope.openModal = function(book) {

        $scope.modal.show();
        $scope.modal.scope.book = book;
    };


    $scope.books = FetchBooks.all();

});

controllers.controller('DiscoverCtrl', function($scope, FetchBooks) {
    $scope.toggleMenu = function() {
        $scope.sideMenuController.toggleLeft();
    };

    $scope.books = FetchBooks.random(10);
});

controllers.controller('HomeCtrl', function($scope) {

});

controllers.controller('MenuCtrl', function($scope, MenuService) {

    $scope.menuList = MenuService.all();

    //    console.log(JSON.stringify($scope.menuList, null, 4));

    $scope.toggleLeft = function() {
        $scope.sideMenuController.toggleLeft();
    };
});


controllers.controller('ReadCtrl', function($scope, $rootScope) {

    $scope.closeModal = function() {
        //$scope.book = null;
        $scope.modal.hide();
    };

    var book = null;

    //setup!
    $scope.$watch('book', function() {
        if ($scope.book === undefined) {
            return;
        }

        EPUBJS.filePath = "/js/reading/";
        book = ePub();
        var bookBasePath = "/books/";
        var completePath = bookBasePath + $scope.book.fileName;
        console.log("want to open filepath" + completePath);
        book.open(completePath);
        book.renderTo("area");

    });

    $scope.previousPage = function() {
        book.prevPage();
    };
    $scope.nextPage = function() {
        book.nextPage();
    };
});

controllers.controller('LoginCtrl', function($scope, $rootScope, $location) {

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

controllers.controller('UserCtrl', function($scope, $rootScope, $location) {
    $scope.logOut = function() {
        Parse.User.logOut();
        $rootScope.sessionUser = null;
        $location.path("/login");
    };
});
