(function() {
	var app = angular.module('sampleStore', ['product-directives']);

	/**
	* Generic controller for the store
	* @param  {Array} The store product data
	*/
	app.controller('StoreController', ['$http', function($http){
		var store = this;
		store.products = [];

		$http.get('./data/products.json').success(function(data){
			store.products = data;
		});
	}]);

})();