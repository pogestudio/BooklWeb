var services = angular.module('bookl.services', []);

/**
 * A simple example service that returns some data.
 */
services.factory('FetchBooks', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var allBooks = [{
            id: 0,
            title: 'Losing My Virginity',
            author: 'Richard Branson',
            fileName: 'losing_my_virginity.epub'
        }, {
            id: 1,
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            fileName: 'steve_jobs.epub'
        }, {
            id: 2,
            title: 'Jag är Zlatan Ibrahimovic',
            author: 'David Lagercrantz',
            fileName: 'zlatan_ibrahimovic.epub'
        }, {
            id: 3,
            title: 'The Lean Startup',
            author: 'Eric Ries',
            fileName: 'lean_startup.epub'
        }, {
            id: 4,
            title: 'A Game of Thrones',
            author: 'George R.R. Martin',
            fileName: 'game_of_thrones1.epub'
        }, {
            id: 5,
            title: 'A Clash of Kings',
            author: 'George R.R. Martin',
            fileName: 'game_of_thrones1.epub'
        }, {
            id: 6,
            title: 'A Storm of Swords',
            author: 'George R.R. Martin',
            fileName: 'game_of_thrones1.epub'
        }, {
            id: 7,
            title: 'A Feast for Crows',
            author: 'George R.R. Martin',
            fileName: 'game_of_thrones1.epub'
        }, {
            id: 8,
            title: 'A Dance with Dragons',
            author: 'George R.R. Martin',
            fileName: 'game_of_thrones1.epub'
        }, {
            id: 9,
            title: 'Business Stripped Bare',
            author: 'Richard Branson',
            fileName: 'business_stripped_bare.epub'
        }, {
            id: 10,
            title: "Harry Potter and the Philosopher's Stone",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter1.epub'
        }, {
            id: 11,
            title: "Harry Potter and the Chamber of Secrets",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter2.epub'
        }, {
            id: 12,
            title: "Harry Potter and the Prisoner of Azkaban",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter3.epub'
        }, {
            id: 13,
            title: "Harry Potter and the Goblet of Fire",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter4.epub'
        }, {
            id: 14,
            title: "Harry Potter and the Order of the Phoenix",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter5.epub'
        }, {
            id: 15,
            title: "Harry Potter and the Half-Blood Prince",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter6.epub'
        }, {
            id: 16,
            title: "Harry Potter and the Deathly Hallows",
            author: 'J.K. Rowlings',
            fileName: 'harry_potter7.epub'
        }


    ];

    return {
        all: function() {
            return allBooks;
        },
        random: function(amount) {
            // Simple index lookup
            var bookCopyArray = allBooks.slice();
            var randomArray = [];
            var usedIndexArray = [];
            var randomIndex;
            while (amount > 0 && bookCopyArray.length > 0) {
                randomIndex = Math.floor(Math.random() * bookCopyArray.length);
                randomArray.push(bookCopyArray[randomIndex]);
                bookCopyArray.splice(randomIndex, 1);
                --amount;
            }
            return randomArray;
        }
    };
});

/**
 * A simple example service that returns some data.
 */
services.factory('MenuService', function() {

  var menuItems = [
      { text: 'Find', iconClass: 'icon ion-ios7-search', link: '#/find'},
      { text: 'Discover', iconClass: 'icon ion-eye', link: '#/discover'},
      { text: 'User', iconClass: 'icon ion-android-contact', link: '#/user'}
  ];

  return {
    all: function() {
      return menuItems;
    }
  };
});

services.factory('FontProvider', function() {

  var fonts = [
      { name: 'Garamond', fontFamily: 'Garamond'},
      { name: 'Arial', fontFamily: 'Arial'},
      { name: 'Georgia', fontFamily: 'Georgia'},
  ];

  return {
    all: function() {
      return fonts;
    }
  };
});

