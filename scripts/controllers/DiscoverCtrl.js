var booklApp = angular.module('bookl');

booklApp.controller('DiscoverCtrl', function($scope, FetchBooks) {
    $scope.toggleMenu = function() {
        $scope.sideMenuController.toggleLeft();
    };

    FetchBooks.all().then(function(books) {
        $scope.books = books;
    });
});
