var models = angular.module('bookl.models', []);

models.factory('BooklUser', function() {

    console.log('bookl user loaded');

    var User = Parse.User.extend({
        //instance methods
        testprintInstance: function() {

            console.log('WORKS!! with user:: ');
            // return the appropriate facebook image url or gravatar image url
        }

    }, {
        // Class methods
        testprint: function() {
            console.log('WORKS!! with user:: ' + User.username);

            console.log('WORKS!! with user:: ');
            // return the appropriate facebook image url or gravatar image url
        }
    });

    return User;
});
