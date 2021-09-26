var myApp = angular.module("myList",[]);
myApp.controller("myListController",function($scope){
  
	console.log("in controller...");
	$scope.newUser = {};
	// $scope.info = "";

	$scope.users = [
		{name: "monika", dob: "15/02/1995", Designation:"developer"},
		{name: "rashi", dob: "20/03/1998", Designation:"Quality mg"},
		{name: "raju", dob: "25/07/1997", Designation:"devop"}
	];

	$scope.saveUser = function(){
		alert("are u sure")
		console.log("Saving...");
		$scope.users.push($scope.newUser);
		// $scope.info = "New User Added Successfully!";
		$scope.newUser = {};
	};


	$scope.selectUser = function(user){
		$scope.clickedUser = user;
	};
	$scope.show=false;
$scope.toggle=function(){
	console.log('inshow')
$scope.show  = !$scope.show;
}

$scope.show2=false;
$scope.toggleee=function(){
	console.log('inshow')
$scope.show2  = !$scope.show2;
}
   
});