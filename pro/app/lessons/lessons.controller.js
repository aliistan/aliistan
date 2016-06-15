(function () {
    "use strict";

    angular.module('bio-app')
        .controller('LessonsController', LessonsController);

    function LessonsController($scope) {
      $scope.isOpen = false;

      // date and time picker
      $scope.picker = {
          date: new Date()
      };

      $scope.openCalendar = function(e, picker) {
        $scope.isOpen = true;
      };
	  }
})();
   