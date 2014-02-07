var models = angular.module('bookl.models');

models.factory('ServerBook', function() {

    console.log('ServerBook loaded');

    var Book = Parse.Object.extend({
        //instance methods
        testprintInstance: function() {

            console.log('WORKS!! with parse object ');
            // return the appropriate facebook image url or gravatar image url
        }

    }, {
        // Class methods
        testprint: function() {
            console.log('WORKS!! with ∏arse OBJECT class method:: ');
            // return the appropriate facebook image url or gravatar image url
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
    Object.defineProperty(Book.prototype, "authors", {
      get: function() {
        return this.get("authors");
      },
      set: function(aValue) {
        this.set("authors", aValue);
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

    Object.defineProperty(Book.prototype, "authors", {
      get: function() {
        return this.get("authors");
      },
      set: function(aValue) {
        this.set("authors", aValue);
      }
    });

    return User;
});
