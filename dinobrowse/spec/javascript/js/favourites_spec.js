Screw.Unit(function() {
  describe("Favourites", function() {

	  before(function() {
	    $('#favourites').append($('<div id="favourites_header"><span id="favourites_count"/></div><div id="favourites_content/></div>'));
		favourites = new Favourites($("#favourites"));
	  });
	
	  describe("by default", function() {

        it("has no dinosaurs", function() {
          expect(favourites.getNumberOfDinosaurs()).to(equal, 0);
        });
		
 	  });
	
	  describe("adding a dinosaur", function() {
		
		before(function() {
		  dinosaur = { getName: function() { return "Apatosaurus" } }
		  favourites.addDinosaur(dinosaur);
		});
		
		it('increments the number of dinosaurs', function() {
		  expect(favourites.getNumberOfDinosaurs()).to(equal, 1);
		});
		
		it("can not add a dinosaur if it already exists", function() {
		  favourites.addDinosaur(dinosaur);
		  expect(favourites.getNumberOfDinosaurs()).to(equal, 1);
		});
		
	  });

	  describe("rendering", function() {
		
		before(function() {
		  favourites.addDinosaur({ getName: function() { return "Apatosaurus" } });
		  favourites.refresh();
		});
		
		it("shows the dinosaur as a numbered list item", function() {
		  expect($("#favourites_content > ol > li").html()).to(equal, "Apatosaurus");	
		});
		
		it("shows the favourites count", function() {
		  expect($("#favourites_count").html()).to(equal, '1');
		});
		
	  });
	
  });
  
});
