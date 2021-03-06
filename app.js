var app = angular.module('TargetPractice', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider

		.state('parent', {
			url: '',
			views: {
				'': {
					//template: '<p>Targeting unnamed view from parent state</p>',
					templateUrl: './templates/child.html',
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
				'': {
					// template: '<p>Targeting unnamed child view from child state</p>'
					templateUrl: './templates/grandchild.html',
				},
				'named-child': {
					template: '<p>Targeting named child view from child state</p>'
				},
				'named-parent@': {
					template: '<p>Targeting named parent view from child state</p>',
				},
				'main-header@': {
					template: '<h2>Targeting header from child state</h2>',
				},
			},
		})

		.state('parent.child.grandchild', {
			url: '/grandchild',
			views: {
				'': {
					template: '<p>Targeting unnamed grandchild view from grandchild state</p>',
				},
				'named-grandchild': {
					template: '<p>Targeting named grandchild view from grandchild state</p>',
				},
				'named-child@parent': {
					template: '<p>Targeting named child view from grandchild state</p>',
				},
				'named-parent@': {
					template: '<p>Targeting named parent view from grandchild state</p>',
				},
				'main-header@': {
					template: '<h2>Targeting header from grandchild state</h2>',
				}
			}
		})
	
	}]
);
