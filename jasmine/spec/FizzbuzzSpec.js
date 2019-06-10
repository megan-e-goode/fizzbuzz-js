describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function () {
    fizzbuzz = new Fizzbuzz();
  });

  it("can return fizzbuzz", function () {
    expect(fizzbuzz.start(15, 15)).toBe(console.info("Fizzbuzz"));
  });

  it("can return buzz", function () {
    expect(fizzbuzz.start(5, 5)).toBe(console.info("Buzz"));
  });

  it("can return fizz", function () {
    expect(fizzbuzz.start(3, 3)).toBe(console.info("Fizz"));
  });

  it("can return a number", function () {
    expect(fizzbuzz.start(2, 2)).toBe(console.info(2));
  });
});
