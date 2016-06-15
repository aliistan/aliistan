(function () {
    "use strict";

    angular.module('bio-app')
        .config(routes);

    function routes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainController'
            })
            .when('/published-translations', {
                templateUrl: 'app/translations/translations.html',
                controller: 'TranslationsController'
            })
            .when('/not-found', {
                //templateUrl: 'not-found/not-found.tpl.html',
                controller: 'NotFoundController'
            })
            .when('/translated-poetry', {
                templateUrl: 'app/Poetry/Poetry.html',
                controller: 'PoetryController'
            })
           
			.when('/lessons', {
                templateUrl: 'app/lessons/lessons.html',
                controller: 'LessonsController'
            })
			.when('/photo', {
                templateUrl: 'app/photo/photo.html',
                controller: 'CarouselController'
            })
			.when('/contact', {
                templateUrl: 'app/contact/contact.html',
                controller: 'ContactController'
            })
            .otherwise({
                //templateUrl: 'not-found/not-found.tpl.html',
                controller: 'NotFoundController'
            });
    }
})();