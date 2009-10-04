$(document).ready(function() {
	favourites = new Favourites($("#favourites"));

	$(".add_to_favourites_link").click(function() {
		var dinosaur = new Dinosaur($(this).parent().parent());
		favourites.addDinosaur(dinosaur);
		favourites.refresh();
	});
	
	$(".wikipedia_link").click(function() {
		$.getJSON("http://en.wikipedia.org/w/api.php/?action=query&prop=links&titles=Ankylosaurus&format=json&jsoncallback=?",
			function(data){
				// $.each(data.items, function(i,item){
				// 	console.log(item);
				// });	
			});
	});
	
	$('div.dinosaur > h2').click(function(){
		$(this).next().toggle();
	});
});