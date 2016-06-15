(function () {
    "use strict";

    angular.module('bio-app')
        .controller('MainController', MainController);

    function MainController ($scope) {
    	$scope.showInfo  = function() {
            angular.element(".infotekst").slideToggle("slow");
        }
        $scope.showBio = function() {
            angular.element(".iAm").slideToggle("slow");
        }
    }



    
})();
   
