(function() {
	var app = angular.module('product-directives', []);

	app.directive('productTabs', function(){
	  return {
		restrict: 'E',
		templateUrl: 'directives/product/tabs.html',
		controller: function() {
			this.tab = 1;

			/**
			* Take a value from a directive and set this.tab to it
			* @param {Number} newValue The new value for this.tab
			*/
			this.setTab = function(newValue){
				this.tab = newValue;
			};

			/**
			* Take a value from a directive and compare the current tab value to it
			* @param  {Number}  tabName The value passed by the directive
			* @return {Boolean} Does the directive's value match the current value of this.tab
			*/
			this.isSet = function(tabName){
				return this.tab === tabName;
			};
		},
		controllerAs: 'tab'
	  };
	});

	app.directive('productGallery', function(){
	  return {
		restrict: 'E',
		templateUrl: 'directives/product/gallery.html',
		controller: function() {
			this.current = 0;
			
			/**
			 * Take a value from a directive and set that
			 * @param {Number} newCurrent The index of the image to be shown
			 */
			this.setCurrent = function(newCurrent) {
				this.current = newCurrent || 0;
			};
		},
		controllerAs: 'gallery'
	  };
	});

	app.directive('productReviews', function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/product/reviews.html',
			controller: function() {
				this.review = {};

				/**
				 * Add a review to the model
				 * @param {object} product The current product object
				 */
				this.addReview = function(product) {
					// Add the current date to the object
					this.review.createdOn = Date.now();

					// Update the product object in the model with the new review
					product.reviews.push(this.review);

					// Reset the temporary review object so the view removes the preview
					this.review = {};
				}
			},
			controllerAs: 'reviewCtrl'
		};
	});

	app.directive('productHeader', function(){
	  return {
		restrict: 'E',
		templateUrl: 'directives/product/header.html'
	  };
	});

})();