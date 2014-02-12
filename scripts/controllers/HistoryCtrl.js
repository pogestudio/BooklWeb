var booklApp = angular.module('bookl');

booklApp.controller('HistoryCtrl', function($scope, FetchBooks, $ionicModal) {



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



    FetchBooks.query(argument).then(function(books) {
        $scope.books = books;
    });

    $scope.title = function(book) {
        return book.get("title");
    };

});
