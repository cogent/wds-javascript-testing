Screw.Unit(function() {
  describe("Application", function() {
	
	  describe("by default", function(){

	 	  it("first dinosaur is visible", function() {
			expect($('.dinosaur:first').hasClass('collapsed')).to(be_false);
		  });

		  it("next dinosaur is invisible", function(){
			expect($('.dinosaur:last').hasClass('collapsed')).to(be_true);
		  });

	  });

	  describe("selecting a dinosaur", function() {
		
		  before(function() {
			$('.dinosaur:last > h2').html('<a name="Ankylosaurus">Ankylosaurus</a>');
			$("#links a[href='#Ankylosaurus']").trigger('click');
		  });
		  
		  it("should make the content visible", function() {
			expect($('.dinosaur:last').hasClass('collapsed')).to(be_false);
		  });
		
		after(function(){
		  $("#links").empty();
		  $('div.dinosaur:last > h2').empty();
		});
		
	  });

	  describe("adding to favourites", function() {

		before(function() {
		  $(".add_to_favourites_link").click();
		});
		
		it("should make a call to add dinosaur", function() {
		  expect(favourites.getNumberOfDinosaurs()).to(equal, 1);
		});
		
	  });
  });
  
});
