namespace toomany {

    angular.module('toomany', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: toomany.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('add', {
                url: '/add',
                templateUrl: '/ngApp/views/addPlace.html',
                controller: toomany.Controllers.AddPlaceController,
                controllerAs: 'vm'
            })
            .state('edit', {
                url: '/edit/:id',
                templateUrl: '/ngApp/views/editPlace.html',
                controller: toomany.Controllers.EditPlaceController,
                controllerAs: 'vm'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
