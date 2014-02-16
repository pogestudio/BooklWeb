var models = angular.module('bookl.models');

models.factory('Book', function() {

    console.log('Book loaded');

    var Book = Parse.Object.extend("Book", {
        //instance methods


    }, {
        // Class methods
        testprint: function() {
            console.log('WORKS!! with Parse OBJECT class method:: ');
            // return the appropriate facebook image url or gravatar image url
        // },
        // findBooksMatching: function(query) {
        //     var queryForTitle = new Parse.Query('Book');
        //     var regEx = "[.]*" + query + "[.]*";
        //     var key = "title";
        //     queryForTitle.matches(key, regEx, "i");

        //     var queryForAuthor = new Parse.Query('Book');
        //     var regExAuthor = "[.]*" + query + "[.]*";
        //     var keyAuthor = "author";
        //     queryForAuthor.matches(keyAuthor, regExAuthor, "i");

        //     //Constructs a Parse.Query that is the OR of the passed in queries.
        //     var compoundQuery = Parse.Query.or(queryForTitle, queryForAuthor);



        //     // queryForTitle.equalTo("title", query);

        //     // var queryForAuthor = new Parse.Query('Book');
        //     // queryForTitle.equalTo("title", query);

        //     // var queryForTitle = new Parse.Query('Book');
        //     // queryForTitle.equalTo("title", query);

        //     return compoundQuery.find();
        // },
        // allBooks: function() {
        //     console.log('fetching all books from parse!');

        //     var query = new Parse.Query("Book");
        //     query.descending("title");
        //     return query.find();
        // }
    });

    // Title property
    Object.defineProperty(Book.prototype, "title", {
        get: function() {
            return this.get("title");
        },
        set: function(aValue) {
            this.set("title", aValue);
        }
    });

    // Title property
    Object.defineProperty(Book.prototype, "author", {
        get: function() {
            return this.get("author");
        },
        set: function(aValue) {
            this.set("author", aValue);
        }
    });

    Object.defineProperty(Book.prototype, "genres", {
        get: function() {
            return this.get("genres");
        },
        set: function(aValue) {
            this.set("genres", aValue);
        }
    });

    Object.defineProperty(Book.prototype, "cost", {
        get: function() {
            return this.get("cost");
        },
        set: function(aValue) {
            this.set("cost", aValue);
        }
    });

    Object.defineProperty(Book.prototype, "fileName", {
        get: function() {
            return this.get("fileName");
        },
        set: function(aValue) {
            this.set("fileName", aValue);
        }
    });

    Object.defineProperty(Book.prototype, "amtOfCharacters", {
        get: function() {
            return this.get("amtOfCharacters");
        },
        set: function(aValue) {
            this.set("amtOfCharacters", aValue);
        }
    });

    return Book;
});
