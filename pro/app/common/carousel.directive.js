(function () {
  "use strict";

  angular.module('bio-app')
      .directive('myCarousel', MyCarousel);

  function MyCarousel() {
    return {
      restrict: 'A',
      templateUrl: 'app/common/carousel.html'
    }
  }
})();