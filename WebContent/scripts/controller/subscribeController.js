angular.module('myApp')
.controller('subscribeCtrl', [
	'$scope',
	'$http','$state','subscribeService', function (
			$scope,
			$http,$state,
			subscribeService) {
		$scope.bookId = $state.params.bookid;
		var bookid = $scope.bookId ;
		var user = sessionStorage.getItem('userData');
		var userData = JSON.parse(user);

		$scope.payToSubscribe = function payToSubscribe() {
			subscribeService.doCheckForSubscription($scope.bookId,userData.userid, function (response) {
				if(response == "") {
					$scope.username;
					$scope.phonenumber;
					$scope.cardtype;
					var box =bootbox.confirm("Cick to Confirm? ", function(result) {
						if(result == true) {
							subscribeService.payToSubscribe(userData.userid,bookid,callback);
						}
					});

					box.find('.modal-content').css({'color': 'red'});

				} else {
					alert("Already Subscribed");
					$state.go('root.dashBoard.singleProduct',{bookid:bookid});
				}
			});

		};

		function callback(payload){
			$state.go('root.dashBoard.singleProduct',{bookid:bookid});
		}

		var init = function init() {
			subscribeService.getAllSubscribedBooksByUserId(userData.userid,function(response){
				$scope.subscribedData = response;
			});					   
		};

		$scope.viewDetails = function viewDetails(bookId) {
			$state.go('root.dashBoard.singleProduct',{bookid:bookId});
		}
		init();
	}]);
