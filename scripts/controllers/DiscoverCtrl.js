var booklApp = angular.module('bookl');

booklApp.controller('DiscoverCtrl', function($scope, FetchBooks) {
    $scope.toggleMenu = function() {
        $scope.sideMenuController.toggleLeft();
    };

    $scope.books = FetchBooks.random(10);
});