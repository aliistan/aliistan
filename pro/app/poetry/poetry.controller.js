(function () {
    "use strict";

    angular.module('bio-app')
        .controller('PoetryController', PoetryController);

    function PoetryController($scope) {
        $scope.showPoem = function($event) {
            angular.element($($event.currentTarget).next()).slideToggle("slow");
        }		
    };
})();