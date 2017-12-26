angular.module('myApp')
	.controller('wishListCtrl', [
			'$scope',
			'$http','$state','wishListService', function (
				$scope,
				$http,$state,
				wishListService) {
				
					var init = function init() {
					 
						$scope.wishListDetails={};
						var user = sessionStorage.getItem('userData');
						var userData = JSON.parse(user);
						
						wishListService.getAllWishListByUserId(userData.userid,function(response){
							$scope.data = response;
						});					   
					};
			
					$scope.removeFromWishList = function removeFromWishList(wishListId) {
						wishListService.removeFromwishList(wishListId);
						alert("deleted Successfully");
						location.reload();
					}
			init();
		}]);