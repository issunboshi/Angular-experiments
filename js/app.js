(function() {
	var app = angular.module('sampleStore', []);

	/**
	* Generic controller for the store
	* @param  {Array} The store product data
	*/
	app.controller('StoreController', function(){
		this.products = gems;
	});

	/**
	 * Set and get the current active tab value
	 * @param  {Number} this.tab The initial value for the tab
	 */
	app.controller('TabController', function(){
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
	});

	/**
	 * Set the default image to show and then allow the image to be changed when a user interacts
	 */
	app.controller('GalleryController', function(){
		this.current = 0;
		
		/**
		 * Take a value from a directive and set that
		 * @param {Number} newCurrent The index of the image to be shown
		 */
		this.setCurrent = function(newCurrent) {
			this.current = newCurrent || 0;
		};
	});

	/**
	 * Allow interaction with the review form
	 */
	app.controller('ReviewController', function(){
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
	});

	app.directive("productHeader", function(){
	  return {
	    restrict: 'E',
	    templateUrl: 'directives/product/header.html'
	  };
	});

	var gems = [{
	      name: 'Azurite',
	      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
	      shine: 8,
	      price: 110.50,
	      rarity: 7,
	      color: '#CCC',
	      faces: 14,
	      images: [
	        "images/gem-02.gif",
	        "images/gem-05.gif",
	        "images/gem-09.gif"
	      ],
	      reviews: [{
	        stars: 5,
	        body: "I love this gem!",
	        author: "joe@example.org",
	        createdOn: 1397490980837
	      }, {
	        stars: 1,
	        body: "This gem sucks.",
	        author: "tim@example.org",
	        createdOn: 1397490980837
	      }]
	    }, {
	      name: 'Bloodstone',
	      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
	      shine: 9,
	      price: 22.90,
	      rarity: 6,
	      color: '#EEE',
	      faces: 12,
	      images: [
	        "images/gem-01.gif",
	        "images/gem-03.gif",
	        "images/gem-04.gif",
	      ],
	      reviews: [{
	        stars: 3,
	        body: "I think this gem was just OK, could honestly use more shine, IMO.",
	        author: "JimmyDean@example.org",
	        createdOn: 1397490980837
	      }, {
	        stars: 4,
	        body: "Any gem with 12 faces is for me!",
	        author: "gemsRock@example.org",
	        createdOn: 1397490980837
	      }]
	    }, {
	      name: 'Zircon',
	      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
	      shine: 70,
	      price: 1100,
	      rarity: 2,
	      color: '#000',
	      faces: 6,
	      images: [
	        "images/gem-06.gif",
	        "images/gem-07.gif",
	        "images/gem-08.gif"
	      ],
	      reviews: [{
	        stars: 1,
	        body: "This gem is WAY too expensive for its rarity value.",
	        author: "turtleguyy@example.org",
	        createdOn: 1397490980837
	      }, {
	        stars: 1,
	        body: "BBW: High Shine != High Quality.",
	        author: "LouisW407@example.org",
	        createdOn: 1397490980837
	      }, {
	        stars: 1,
	        body: "Don't waste your rubles!",
	        author: "nat@example.org",
	        createdOn: 1397490980837
	      }]
	    }];
})();
