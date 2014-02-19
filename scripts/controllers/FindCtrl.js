var booklApp = angular.module('bookl');

booklApp.controller('FindCtrl', function($scope, FetchBooks, Book, $ionicModal) {



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

    var search = function(argument) {
        console.log('searching! for: ' + argument);
        FetchBooks.query(argument).then(function(books) {
            console.log('found : ' + books.length + " books");
            $scope.books = books;
            $scope.$apply();
        });
    };


    var timer;
    $scope.textEntered = function(text) {
        console.log('text entered!!');
        timer && clearTimeout(timer);
        timer = setTimeout(function() {search(text);}, 1000);
    };


    $scope.title = function(book) {
        return book.get("title");
    };


    //DEBUG SHIT
    $scope.searchText = 'Richard Branson';
    search($scope.searchText);

});
