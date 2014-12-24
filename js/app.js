var sampleStore = angular.module('sampleStore', []);

// Used to share assets with different controllers without having to share a parent method which holds the same data
sampleStore.factory('Message', function () {
	return [
		{
			message: "I'm data from a service",
			someOtherData: "Hello"
		},
		{
			message: "I'm some more data from a service",
			someOtherData: "There"
		}
	];
});

sampleStore.controller('FirstCtrl', function ($scope, Message) {
	$scope.data = Message;
});

sampleStore.controller('SecondCtrl', function ($scope, Message) {
	$scope.data = {message: "Hello"};
});