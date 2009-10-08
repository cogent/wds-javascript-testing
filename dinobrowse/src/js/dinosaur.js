function Dinosaur(element) {
	this.element = element;
	if (!element.find('h2')) {
		throw new Error('invalid');
	}
};

Dinosaur.prototype = {
	getName: function() {
		return this.element.find('h2').html();
	},

	getRating: function() {
		return this.element.find(".dinosaur_rating option:selected").html();
	},
	
	equals: function(other) {
		return this.getName() == other.getName();
	}
};

