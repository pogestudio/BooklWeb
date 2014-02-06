var booklApp = angular.module('bookl');

booklApp.controller('ReadCtrl', function($scope) {

    // BOOK RELATED

    var book = null;

    //setup!
    $scope.$watch('book', function() {
        if ($scope.book === undefined) {
            return;
        }

        EPUBJS.filePath = "js/reading/";
        book = ePub();
        var bookBasePath = "books/";
        var completePath = bookBasePath + $scope.book.fileName;
        console.log("want to open filepath" + completePath);
        book.open(completePath);
        book.renderTo("area");

        book.getMetadata().then(function(meta) {
            $scope.headerTitle = meta.bookTitle;
        });


        loadTOC(book);

    });

    var loadTOC = function(book) {
        $scope.toc = [];
        book.getToc().then(function(toc) {

            // var $select = document.getElementById("toc"),
            //     docfrag = document.createDocumentFragment();

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

    $scope.changeFont = function() {
        // book.setStyle("font-family", "Times New Roman");
        book.setStyle("font-family", "Arial");
    };

    // Book.ready.all.then(function() {
    //     document.getElementById("loader").style.display = "none";
    // });

    $scope.leftButtons = [{
        type: 'button button-positive',
        content: '<i class="icon ion-navicon"></i>',
        tap: function(e) {
            //close modal!
            $scope.modal.hide();
        }
    }];

    $scope.rightButtons = [{
        type: 'button-positive',
        content: '<i class="icon ion-paper-airplane"></i >',
        tap: function(e) {
            $scope.toggleTextSettings();
        }
    }, {
        type: 'button-positive',
        content: '<i class="icon ion-navicon"></i >',
        tap: function(e) {
            $scope.toggleTOC();
        }
    }];
});
