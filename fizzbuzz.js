class FizzBuzz {
  static say(number) {
    switch (true) {
      case number % 15 === 0:
        return "fizzbuzz";
      case number % 5 === 0:
        return "buzz";
      case number % 3 === 0:
        return "fizz";
      default:
        return number;
    }
  }
}
module.exports = FizzBuzz;

//   if (number % 3 === 0) {
//     return "fizz";
//   } else if (number % 5 === 0) {
//     return "fizz";
//   } else if (number % 3 === 0 && number % 5 === 0) {
//     return "fizzbuzz";
//   } else
//      return number;
// }
