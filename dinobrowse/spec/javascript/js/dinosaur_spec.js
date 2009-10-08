Screw.Unit(function() {
  describe("A Dinosaur", function() {

	before(function() {
	  $(".dinosaur > h2").html('Test Dinosaur');
	  $(".dinosaur_content").append('<select class="dinosaur_rating"><option value="scary" selected="selected">Scary</option>' 
									+ '<option value="cuddly">Cuddly</option></select>');
	  dinosaur = new Dinosaur($(".dinosaur"));
	});
	
	it("has a default rating", function() {
	  expect(dinosaur.getRating()).to(equal, 'Scary');
	});
	
    it("can get the name from the enclosed h2 element", function() {
      expect(dinosaur.getName()).to(equal, 'Test Dinosaur');
    });

	it("equals another dinosaur by name", function() {
	  var anotherDinosaur = new Object();
	  new Smoke.Stub(anotherDinosaur, 'getName').and_return('Test Dinosaur');
	  expect(dinosaur.equals(anotherDinosaur)).to(be_true);
	});
	
	after(function() {
	  $(".dinosaur > h2").empty();
	  $(".dinosaur_rating").remove();
	});
  });
  
});
