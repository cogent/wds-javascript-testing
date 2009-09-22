function CartItem(item, quantity) {
	this.item = item;
	this.quantity = quantity;
}

CartItem.prototype = {

	getTotalCost: function() {
		return this.item.getPrice() * this.quantity;
	}
}

function ShoppingCart() {
	this.items = [];
	this.totalCost = 0.0;
} 

ShoppingCart.prototype = {
	getNumberOfItems: function() {
		return this.items.length;
	},

	getTotalCost: function() {
		return this.totalCost;
	},
	
	addItem: function(item, quantity) {
		var cartItem = new CartItem(item, quantity || 1);
		this.items[this.items.length] = cartItem;
		this.totalCost += cartItem.getTotalCost();
	}
};

