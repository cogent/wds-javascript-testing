$(document).ready(function() {
	favourites = new Favourites();

	$(".dinosaur_image").draggable({
		helper: 'clone'
	});
	
	$("#favourites").droppable({
		drop: function(event, ui) {
			var draggable = ui.draggable;
			var dinosaur = new Dinosaur($(draggable).parent());
			favourites.addDinosaur(dinosaur);
			$("<p>" + dinosaur.getName() + "</p>").insertAfter($("#favourites").find("h3"));
		}
	});
	
});

