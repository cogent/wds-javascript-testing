Screw.Unit(function() {
  describe("Application", function() {
	
 	  it("by default content is invisible", function() {
		expect($('.dinosaur_content').css('display')).to(equal, 'none');
	  });
	
	  describe("selecting a dinosaur", function() {
		
		  before(function() {
			$('div.dinosaur > h2').trigger('click');
		  });
		  
		  it("should make the content visible", function() {
			expect($('.dinosaur_content').css('display')).to(equal, 'block');
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
