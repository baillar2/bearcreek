angular.module('moduleOne',['ngRoute'])

	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl : '/about.html',
			})
			.when('/about', {
				templateUrl: '/about.html'
			})
			.when('/contact', {
				templateUrl: '/contact.html',
				controller: 'controllerOne'
			})
			.when('/blog', {
				templateUrl: '/blog.html'
			})
			.when('/services',{
				templateUrl: '/services.html'
			})
	})