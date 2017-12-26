angular.module('myApp')
.controller('dashboardController',function ($state) {
	var init= function init() {
		var userData = sessionStorage.getItem('userName');
		if(userData == null) {
         	$state.go('root.index');
		}
	}
	init();
});