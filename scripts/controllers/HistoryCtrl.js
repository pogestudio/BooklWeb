var booklApp = angular.module('bookl');


booklApp.controller('HistoryCtrl', function($scope, FetchBooks, Book, $ionicModal) {


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



    FetchBooks.historyForUser().then(function(serverBooks) {
        $scope.books = [];
        for (var i = 0; i < serverBooks.length; i++) {
            var bookForServerBook = serverBooks[i].book;
            bookForServerBook.set("lastRead", serverBooks[i].updatedAt);
            $scope.books.push(bookForServerBook);
            $scope.$apply();
        }
    });

    $scope.title = function(book) {
        return book.get("title");
    };

});
