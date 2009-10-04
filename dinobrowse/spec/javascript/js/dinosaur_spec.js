Screw.Unit(function() {
  describe("A Dinosaur", function() {

	before(function() {
	  $(".dinosaur > h2").html('Test Dinosaur');
	  dinosaur = new Dinosaur($(".dinosaur"));
	});
	
    it("can get the name from the enclosed h2 element", function() {
      expect(dinosaur.getName()).to(equal, 'Test Dinosaur');
    });

	after(function() {
	  $(".dinosaur > h2").empty();
	});
  });
  
});
