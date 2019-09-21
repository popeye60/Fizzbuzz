const FizzBuzz = require("./fizzbuzz");

describe("Test FizzBuzz", () => {
  test("Test 1 expect 1", () => {
    const result = FizzBuzz.say(1);
    expect(result).toEqual(1); //Assert Function
  });

  test("Test 2 expect 2", () => {
    const result = FizzBuzz.say(2);
    expect(result).toEqual(2); //Assert Function
  });

  test("Test 3 expect 3", () => {
    const result = FizzBuzz.say(3);
    expect(result).toEqual("fizz"); //Assert Function
  });
  test("Test 5 expect buzz", () => {
    const result = FizzBuzz.say(5);
    expect(result).toEqual("buzz"); //Assert Function
  });
  test("Test 15 expect fizzbuzz", () => {
    const result = FizzBuzz.say(15);
    expect(result).toEqual("fizzbuzz"); //Assert Function
  });
});
