var booklApp = angular.module('bookl');

booklApp.controller('UserCtrl', function($scope, $rootScope, $location, Book) {
    $scope.logOut = function() {
        Parse.User.logOut();
        $rootScope.sessionUser = null;
        $location.path("/login");
    };

    $scope.emptyBooks = function() {


        //send a single command to Parse database

        $scope.consoleMessage = 'Books are cleared';
        $scope.consoleColor = 'green';

    };

    $scope.emptyMoments = function() {


        //send a single command to Parse database

        $scope.consoleMessage = 'Moments are cleared';
        $scope.consoleColor = 'green';

    };

    $scope.seedBooks = function() {

        //seed metaData

        //

        //Create lots of books and save them all.

        var bookArray = [{
            title: 'Losing My Virginity',
            author: 'Richard Branson',
            fileName: 'losing_my_virginity.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            fileName: 'steve_jobs.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: 'Jag är Zlatan Ibrahimovic',
            author: 'David Lagercrantz',
            fileName: 'zlatan_ibrahimovic.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: 'The Lean Startup',
            author: 'Eric Ries',
            fileName: 'lean_startup.epub',
            characterCount : 0,
            genre : ['Business', 'Biography'],
        }, {
            title: 'A Game of Thrones',
            author: 'George R.R. Martin',
            fileName: 'game_of_thrones1.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: 'A Clash of Kings',
            author: 'George R.R. Martin',
            fileName: 'game_of_thrones1.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: 'A Storm of Swords',
            author: 'George R.R. Martin',
            fileName: 'game_of_thrones1.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: 'A Feast for Crows',
            author: 'George R.R. Martin',
            fileName: 'game_of_thrones1.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: 'A Dance with Dragons',
            author: 'George R.R. Martin',
            fileName: 'game_of_thrones1.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: 'Business Stripped Bare',
            author: 'Richard Branson',
            fileName: 'business_stripped_bare.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: "Harry Potter and the Philosopher's Stone",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter1.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: "Harry Potter and the Chamber of Secrets",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter2.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: "Harry Potter and the Prisoner of Azkaban",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter3.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: "Harry Potter and the Goblet of Fire",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter4.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: "Harry Potter and the Order of the Phoenix",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter5.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: "Harry Potter and the Half-Blood Prince",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter6.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }, {
            title: "Harry Potter and the Deathly Hallows",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter7.epub',
            characterCount : 0,
            genre : ['Business', 'Biography']
        }];

        var Book = Parse.Object.extend("Book");
        
        for (var i = bookArray.length - 1; i >= 0; i--) {
            var bookFromArray = bookArray[i];
            var book = new Book();
            book.title = bookFromArray.title;
            book.author = bookFromArray.author;
            book.fileName = bookFromArray.fileName;
            book.cost = 149.0;
            book.save();
        }

        $scope.consoleMessage = 'Books are inserted!';
        $scope.myStyle = { color : 'green' };

    };
});
