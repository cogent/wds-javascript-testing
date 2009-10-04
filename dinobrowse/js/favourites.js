function Favourites(element) {
	this.dinosaurs = [];
	this.element = element;
} 

Favourites.prototype = {
	getNumberOfDinosaurs: function() {
		return this.dinosaurs.length;
	},

	addDinosaur: function(dinosaur) {
		var found = false;
		for (var i in this.dinosaurs) {
			if (this.dinosaurs[i].getName() == dinosaur.getName()) {
				found = true;
			};
		}
		if (!found) {
			this.dinosaurs.push(dinosaur);
		}
	},
	
	refresh: function() {
		this.render();
	},
	
	render: function() {
		var ul = this.element.find('ol');
		if (ul.size() == 0) {
		  ul = $('<ol/>');
		  $("#favourites_content").append(ul);
		}
		$(this.dinosaurs).each(function() {
			if (ul.find("li:contains(" + this.getName() + ")").length == 0) {
				ul.append('<li>' + this.getName() + '</li>');
			}
		});
		$("#favourites_count").html(this.getNumberOfDinosaurs());
	}
};

