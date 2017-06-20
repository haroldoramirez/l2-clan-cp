angular
    .module
    ('agenda',
        [
            'ngRoute',
            'ngResource',
            'ngAnimate',
            'ngSanitize',
            'toastr',
            'ui.bootstrap',
            'angular-loading-bar'
        ]
    )
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({enabled: false, requireBase: false, rewriteLinks: false});

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('index', {
                url: "/",
                templateUrl: 'assets/app/views/index.html',
                controller: 'index.controller',
                activetab: 'home'
            })
    });