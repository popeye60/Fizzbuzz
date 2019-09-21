class FizzBuzz {
  static say(number) {
    if (number.toEqul % 3 === 0) {
      return "fizz";
    } else if (number.toEqul % 5 === 0) {
      return "buzz";
    } else if (number.toEqul % 3 === 0 && number.toEqul % 5 === 0) {
      return "fizzbuzz";
    } else return number;
  }
}

module.exports = FizzBuzz;

// for (number = 1; number < 1000; number++) {
//   if (number % 3 === 0) {
//     console.log("fizz");
//   } else if (number % 7 == 0) {
//     console.log("fizz");
//   } else if (number % 3 == 0 && number % 7 == 0) {
//     console.log("fizz");
//   } else console.log("buzz");
// }
