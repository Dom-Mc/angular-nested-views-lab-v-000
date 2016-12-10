// angular
//     .module('app', ['ui.router'])
//
//     // NOTE: $urlRouterProvider has the responsibility of watching $location. When $location changes it runs through a list of rules one by one until a match is found. $urlRouterProvider is used behind the scenes anytime you specify a url in a state configuration.
//     .config(function ($stateProvider, $urlRouterProvider){
//       $stateProvider
//         .state('home', {
//             url: 'home',
//             templateUrl: 'views/home.html'
//         })
//         .state('home.notifications', {
//             url: 'notifications',
//             templateUrl: 'views/home/notifications.html'
//         })
//         .state('home.timeline', {
//             url: 'timeline',
//             templateUrl: 'views/home/timeline.html'
//         })
//         .state('home.user', {
//             url: 'user',
//             templateUrl: 'views/home/user.html'
//         })
//
//         // NOTE: fallback
//         $urlRouterProvider.otherwise('/');
//     });




angular
    .module('app', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html'
			})
			.state('home.notifications', {
				url: 'notifications',
				templateUrl: 'views/home/notifications.html'
			})
			.state('home.timeline', {
				url: 'timeline',
				templateUrl: 'views/home/timeline.html'
			})
			.state('home.user', {
				url: 'user',
				templateUrl: 'views/home/user.html'
			});

		$urlRouterProvider.otherwise('/');
	});
