(function () {
    "use strict";

    angular.module('bio-app')
        .controller('TranslationsController', TranslationsController);

        function TranslationsController($scope, $log) {
        $scope.totalItems = 36;
        $scope.currentPage = 1;
       

       
        $scope.setPage = function (page1) {
        $scope.currentPage = page1;
        };

         $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
        };
    }


          
         

})();



 

        

       


