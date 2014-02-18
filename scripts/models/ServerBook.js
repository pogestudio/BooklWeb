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
            console.log('WORKS!! with Parse OBJECT class method:: ');
            // return the appropriate facebook image url or gravatar image url
        },
        findBooksMatching: function(query) {
            var queryForTitle = new Parse.Query('ServerBook');
            var regEx = "[.]*" + query + "[.]*";
            var key = "title";
            queryForTitle.matches(key, regEx, "i");

            var queryForAuthor = new Parse.Query('ServerBook');
            var regExAuthor = "[.]*" + query + "[.]*";
            var keyAuthor = "author";
            queryForAuthor.matches(keyAuthor, regExAuthor, "i");

            //Constructs a Parse.Query that is the OR of the passed in queries.
            var compoundQuery = Parse.Query.or(queryForTitle, queryForAuthor);



            // queryForTitle.equalTo("title", query);

            // var queryForAuthor = new Parse.Query('ServerBook');
            // queryForTitle.equalTo("title", query);

            // var queryForTitle = new Parse.Query('ServerBook');
            // queryForTitle.equalTo("title", query);

            return compoundQuery.find();
        },
        allBooks: function() {
            console.log('fetching all books from parse!');

            var query = new Parse.Query("ServerBook");
            query.descending("title");
            return query.find();
        }
    });

    Object.defineProperty(Book.prototype, "book", {
        get: function() {
            return this.get("book");
        },
        set: function(aValue) {
            this.set("book", aValue);
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
