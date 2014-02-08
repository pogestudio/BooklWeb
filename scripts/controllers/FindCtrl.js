var booklApp = angular.module('bookl');

booklApp.controller('FindCtrl', function($scope, FetchBooks, $ionicModal) {



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


    $scope.search = function(argument) {
        console.log('want to search!' + argument);

        //create or search from title
        //create or search from author
        //create or search from genre

        FetchBooks.query(argument).then(function(books) {
            $scope.books = books;
        });

    };

    FetchBooks.all().then(function(books) {

        $scope.books = books;


        // // console.log(JSON.stringify(books, null, 4));

        // i = 0;
        // for (var book in books) {
        //     $scope.books.push(books[book]);
        //     //console.log(books[book].title);
        //     i++;
        //     if (i > 3) break;
        // }

        // console.log(JSON.stringify($scope.books, null, 4));

    });

    $scope.title = function(book) {
        return book.get("title");
    };

});
