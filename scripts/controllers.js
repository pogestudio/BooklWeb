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


    $scope.books = FetchBooks.random(10);
    //console.log(JSON.stringify($scope.books,null,4));
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


controllers.controller('ReadCtrl', function($scope) {

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
        book.previousPage();
    };
    $scope.nextPage = function() {
        book.nextPage();
    };


});

// controllers.controller('LoginCtrl', function($scope) {

// });
