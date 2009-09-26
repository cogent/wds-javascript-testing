$(document).ready(function() {
	favourites = new Favourites($("#favourites"));

	$(".dinosaur_image").draggable({
		helper: 'clone'
	});
	
	$("#favourites").droppable({
		drop: function(event, ui) {
			var draggable = ui.draggable;
			var dinosaur = new Dinosaur($(draggable).parent().parent());
			favourites.addDinosaur(dinosaur);
			favourites.refresh();
		}
	});

	$('div.dinosaur > h2').click(function(){
		$(this).next().toggle();
	});
});

