var booklApp = angular.module('bookl');

booklApp.controller('ReadCtrl', function($scope, $rootScope) {

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

        EPUBJS.filePath = "js/reading/";
        book = ePub();
        var bookBasePath = "books/";
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
