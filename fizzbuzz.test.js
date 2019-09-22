const FizzBuzz = require("./fizzbuzz");

describe("Test FizzBuzz", () => {
  test("Test 1 expect 1", () => {
    const result = FizzBuzz.say(1);
    expect(result).toEqual(1); //Assert Function
  });
  test("Test 3 expect 2", () => {
    const result = FizzBuzz.say(3);
    expect(result).toString("fizz"); //Assert Function
  });
  test("Test 5 expect 3", () => {
    const result = FizzBuzz.say(5);
    expect(result).toString("buzz"); //Assert Function
  });
  test("Test 15 expect 4", () => {
    const result = FizzBuzz.say(15);
    expect(result).toString("fizzbuzz"); //Assert Function
  });
});
