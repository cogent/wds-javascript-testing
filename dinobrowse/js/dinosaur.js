function Dinosaur(element) {
	this.element = element;
};

Dinosaur.prototype = {
	getName: function() {
		return this.element.find('h2').html();
	},
	
	equals: function(other) {
		return this.getName() == other.getName();
	}
};

