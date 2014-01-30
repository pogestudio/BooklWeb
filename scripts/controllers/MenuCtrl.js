var booklApp = angular.module('bookl');

booklApp.controller('MenuCtrl', function($scope, MenuService) {

    $scope.menuList = MenuService.all();

    //    console.log(JSON.stringify($scope.menuList, null, 4));

    $scope.toggleLeft = function() {
        $scope.sideMenuController.toggleLeft();
    };
});
