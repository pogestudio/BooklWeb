var booklApp = angular.module('bookl');

booklApp.controller('ReadCtrl', function($scope, FontProvider, ReadingSession) {

    var previousStartOfPage = 0;
    var timeUserBeganReadingPage = 0;
    var initiateReadingSessionWithStartCFI = function(currentStartOfPage) {
        var ReadingSession = Parse.Object.extend("ReadingSession");
        var readingSession = new ReadingSession();

        if (previousStartOfPage) {
            console.log('SP : ' + previousStartOfPage + ' endPos:' + currentStartOfPage);
            readingSession.setUpWithValues(previousStartOfPage, currentStartOfPage, timeUserBeganReadingPage, $scope.book);
            readingSession.saveIfLongEnough();
            console.log('spent : ' + readingSession.timeSpent + " seconds!!");
        }
        timeUserBeganReadingPage = new Date();
        previousStartOfPage = currentStartOfPage;
    };


    // BOOK RELATED

    var book = null;

    //setup!

    $scope.$watch('book', function() {
        if ($scope.book === undefined) {
            return;
        }

        getLatestReadingSession();

        EPUBJS.filePath = "js/reading/";
        book = ePub();

        var bookBasePath = "books/";
        var completePath = bookBasePath + $scope.book.fileName;
        book.open(completePath);
        book.renderTo("area");

        book.on("renderer:pageChanged", function(cfi) {
            if (previousStartOfPage !== cfi) {
                initiateReadingSessionWithStartCFI(cfi);
                //if we haven't actually switched page, then fuuuuuck it!
            }

        });

        book.getMetadata().then(function(meta) {
            $scope.headerTitle = meta.bookTitle;
        });


        loadTOC(book);

    });

    var once = null;
    var getLatestReadingSession = function() {
        if (once) {
            console.log('were spamming');
            return;
        } else {
            once = true;
        }
        ReadingSession.getLatestPositionForBook($scope.book).then(function(result) {
            if (result && result.startPos) {
                var theStartPos = result.startPos;
                console.log('want to go to startPos:::' + theStartPos + '::');
                book.gotoCfi(theStartPos);
            }
        }, function(error) {
            console.log('we got error from latest reading session"" ' + error);
        });
    };

    var loadTOC = function(book) {
        $scope.toc = [];
        book.getToc().then(function(toc) {

            toc.forEach(function(chapter) {
                // var option = document.createElement("option");
                var tocEntry = {
                    title: chapter.label,
                    cfi: chapter.href,
                };
                $scope.toc.push(tocEntry);
            });

        });
    };


    $scope.previousPage = function() {
        book.prevPage();
    };
    $scope.nextPage = function() {
        book.nextPage();
    };


    $scope.goToBookLink = function(url) {
        book.goto(url);

        $scope.sideMenuController.close();
    };

    // NAVIGATION RELATED

    $scope.showHeader = true;

    $scope.toggleHeading = function() {
        $scope.showHeader = !$scope.showHeader;
        $scope.sideMenuController.close();
    };

    $scope.toggleTextSettings = function() {
        $scope.rightMenuTitle = 'Text Settings';
        $scope.showText = true;
        $scope.sideMenuController.toggleRight();
    };

    $scope.toggleTOC = function() {
        $scope.rightMenuTitle = 'TOC';
        $scope.showText = false;
        $scope.sideMenuController.toggleRight();

    };

    var fontSize = 1.0;

    $scope.changeFontSize = function(value) {
        fontSize += value;
        book.setStyle("font-size", fontSize + "em");

    };

    $scope.changeFont = function(fontFamily) {
        // book.setStyle("font-family", "Times New Roman");
        book.setStyle("font-family", fontFamily);
        $scope.chosenFontFamily = fontFamily;
    };

    $scope.currentPadding = 0;
    $scope.changeWrapperPadding = function(pixelsToChange) {
        $scope.currentPadding += pixelsToChange;
        var wrapper = document.getElementById("wrapper");
        var currentPadding = wrapper.style.padding;
        //if the padding is set, get it from the style. if not, set it to 0.
        var amtPadding = currentPadding === "" ? 0 : parseInt(currentPadding.split("px")[0], 10);
        var minPadding = 2;
        amtPadding += pixelsToChange;
        amtPadding = Math.max(amtPadding, minPadding);

        var newPadding = amtPadding + "px";

        wrapper.style.padding = newPadding;
    };

    // Book.ready.all.then(function() {
    //     document.getElementById("loader").style.display = "none";
    // });

    $scope.leftButtons = [{
        type: 'button-clear',
        content: '<i class="icon ion-close"></i>',
        tap: function(e) {
            //close modal!


            if (previousStartOfPage) {
                //save the last read page if we are closing, so that we can pick up here next time.
                initiateReadingSessionWithStartCFI(previousStartOfPage);
            }
            //book.destroy();
            $scope.modal.hide();
        }
    }];

    $scope.rightButtons = [{
        type: 'button-clear',
        content: '<i class="icon ion-paper-airplane padding-horizontal"></i >',
        tap: function(e) {
            $scope.toggleTextSettings();
        }
    }, {
        type: 'button-clear',
        content: '<i class="icon ion-navicon padding-horizontal"></i >',
        tap: function(e) {
            $scope.toggleTOC();
        }
    }];

    $scope.fonts = FontProvider.all();

});
