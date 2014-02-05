var booklApp = angular.module('bookl');

booklApp.controller('ReadCtrl', function($scope, $rootScope) {

    $scope.showHeader = true;

    $scope.toggleHeading = function () {
        console.log('toggling heading!');
        $scope.showHeader = !$scope.showHeader;
    };

    $scope.closeModal = function() {
        //clean up everything inside area tag
        
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

        $rootScope.currentBook = book;

    });

    $scope.previousPage = function() {
        console.log('prevpage?');
        book.prevPage();
    };
    $scope.nextPage = function() {
        book.nextPage();
    };
});
