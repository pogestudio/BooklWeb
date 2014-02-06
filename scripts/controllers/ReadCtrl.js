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
        book.prevPage();
    };
    $scope.nextPage = function() {
        book.nextPage();
    };

    //TABLE OF CONTENT STUFF
    $scope.toc = [];
    var entry1 = {
        title : "An epic journey",
        id : 0,
    };
    var entry2 = {
        title : "A silly goose",
        id : 1,
    };
    var entry3 = {
        title : "A farfetched thought",
        id : 2,
    };
    var entry4 = {
        title : "A life of events",
        id : 3,
    };
    $scope.toc.push(entry1);
    $scope.toc.push(entry2);
    $scope.toc.push(entry3);
    $scope.toc.push(entry4);
});
