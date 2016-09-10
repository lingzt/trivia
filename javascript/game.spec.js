require('./game.js');

describe("The test environment", function() {
  it("should pass", function() {
    expect(true).toBe(true);
  });

  it("should access game", function() {
    expect(Game).toBeDefined();
  });
});

describe("Add category", function() {
  it("Will add a new category when the category is empty and the count is one",function(){
    var game = new Game();
    console.log("did it!");
  });
});
