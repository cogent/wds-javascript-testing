$(document).ready(function() {
	favourites = new Favourites($("#favourites"));

	$(".add_to_favourites_link").click(function() {
		var dinosaur = new Dinosaur($(this).parent().parent());
		favourites.addDinosaur(dinosaur);
		favourites.refresh();
	});
	
	$('div.dinosaur > h2').click(function(){
		$(this).next().toggle();
	});
});