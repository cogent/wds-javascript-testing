function Favourites(element) {
	this.dinosaurs = [];
	this.element = element;
} 

Favourites.prototype = {
	getNumberOfDinosaurs: function() {
		return this.dinosaurs.length;
	},

	addDinosaur: function(dinosaur) {
		this.dinosaurs.push(dinosaur);
	},
	
	getDinosaurs: function() {
		return this.dinosaurs;
	},
	
	refresh: function() {
		this.render();
	},
	
	render: function() {
		var ul = this.element.find('ul');
		if (ul.size() == 0) {
		  ul = $('<ul/>');
		  this._headerElement().append(ul);
		}
		$(this.dinosaurs).each(function() {
			ul.append('<li>' + this.getName() + '</li>')
		})
	},
	
	_headerElement: function() {
		return $(this.element).find('h3');
	}
};

