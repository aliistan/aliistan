(function () {
  "use strict";

  angular.module('bio-app')
      .controller('CarouselController', CarouselController);

  function CarouselController($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [],
        currIndex = 0;

    $scope.addSlide = function() {
      slides.push({
        image: 'app/images/' + currIndex + '.jpg',
        text: ['1','2','3','4'][slides.length % 4],
        id: currIndex++
      });
    };

    for (var i = 0; i < 4; i++) {
      $scope.addSlide();
    }
  }
})();
