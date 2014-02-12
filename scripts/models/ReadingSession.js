var models = angular.module('bookl.models');

models.factory('ReadingSession', function() {

    var TIME_TO_BE_READ = 5.0;

    var secondsBetweenDates = function(Date1, Date2) {
        var dif = Date1.getTime() - Date2.getTime();
        var Seconds_Between_Dates = Math.abs(dif / 1000);
        return Seconds_Between_Dates;
    };


    var ReadingSession = Parse.Object.extend("ReadingSession", {
        //instance methods
        setUpWithValues: function(previousStartOfPage, currentStartOfPage, timeUserBeganReading, book) {
            this.startPos = previousStartOfPage;
            this.endPos = currentStartOfPage;
            this.timeSpent = secondsBetweenDates(timeUserBeganReading, new Date());
            this.set('book', book);
            //this.set('parent', book);
        },
        saveIfLongEnough: function() {
            if(this.timeSpent > TIME_TO_BE_READ)
            {
                this.save();
            }
        }

    }, {
        // Class methods
        secondsBetweenDates: function(Date1, Date2) {
            var dif = Date1.getTime() - Date2.getTime();
            var Seconds_Between_Dates = Math.abs(dif / 1000);
            return Seconds_Between_Dates;
        },
        getLatestPositionForBook: function(book) {
            var query = new Parse.Query('ReadingSession');
            query.equalTo("book", book);
            query.descending("createdAt");
            return query.first();
        }

    });

    // Title property
    Object.defineProperty(ReadingSession.prototype, "startPos", {
        get: function() {
            return this.get("startPos");
        },
        set: function(aValue) {
            this.set("startPos", aValue);
        }
    });

    // Title property
    Object.defineProperty(ReadingSession.prototype, "endPos", {
        get: function() {
            return this.get("endPos");
        },
        set: function(aValue) {
            this.set("endPos", aValue);
        }
    });

    Object.defineProperty(ReadingSession.prototype, "isRead", {
        get: function() {
            return this.get("isRead");
        },
        set: function(aValue) {
            this.set("isRead", aValue);
        }
    });

    Object.defineProperty(ReadingSession.prototype, "timeSpent", {
        get: function() {
            return this.get("timeSpent");
        },
        set: function(aValue) {
            this.set("timeSpent", aValue);
        }
    });

    Object.defineProperty(ReadingSession.prototype, "characters", {
        get: function() {
            return this.get("characters");
        },
        set: function(aValue) {
            this.set("characters", aValue);
        }
    });

    //should maybe include bookId and userId somehow? dunno about this


    return ReadingSession;
});
