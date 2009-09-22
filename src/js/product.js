function Product(title, price) {
	this.title = title;
	this.price = price;
};

Product.prototype = {
	getTitle: function() {
		return this.title;
	},
	
	getPrice: function() {
		return this.price;
	}
};
