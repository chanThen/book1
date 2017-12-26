angular.module('myApp')
.controller('logOutPageControl',function ($state,$scope,userServices) {

	var init = function init() {

		var user = sessionStorage.getItem('userData');
		$scope.userData = JSON.parse(user);

		if($scope.userData == null){
			$state.go('root.index');
		}

		
	}
	
	$scope.signout =function signout(){
		userServices.signout();
	}
	init();

});
