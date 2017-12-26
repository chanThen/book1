angular.module('myApp')
	.controller('indexPageControl',function($scope,userServices){  
		$scope.email;
		$scope.pwd;
		
		$scope.login = function login (){
			userServices.loginAuthentication($scope.email,$scope.pwd);
		}
		
		$scope.createUserAccount = function(){
			userServices.createUserAccount();
		}
	});