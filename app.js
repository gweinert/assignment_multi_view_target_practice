var app = angular.module('TargetPractice', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider

		.state('parent', {
			url: '',
			views: {
				'': {
					template: '<p>Targeting unnamed view from parent state</p>',
				},
				'named-parent': {
					template: '<p>Targeting named view from parent state</p>',
				},
				'main-header': {
					template: '<h2>Targeting header from parent state</h2>',
				},
			},
		})
		
		.state('parent.child', {
			url: '/child',
			views: {

			},
		})
	
	}]
);
