var models = angular.module('bookl.models');

models.factory('ServerBook', function() {

    console.log('ServerBook loaded');

    var Book = Parse.Object.extend("ServerBook", {
        //instance methods
        testprintInstance: function() {

            console.log('WORKS!! with parse object title + ' + this.title);
            // return the appropriate facebook image url or gravatar image url
        }

    }, {
        // Class methods
        testprint: function() {
            console.log('WORKS!! with ∏arse OBJECT class method:: ');
            // return the appropriate facebook image url or gravatar image url
        },
        allBooks: function() {
            console.log('fetching all books from parse!');

            var query = new Parse.Query("ServerBook");
            query.descending("title");
            return query.find();
        }
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

    return Book;
});
