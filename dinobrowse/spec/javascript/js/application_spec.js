Screw.Unit(function() {
  describe("Application", function() {
	
 	  it("be default content is invisible", function() {
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

  });
  
});
