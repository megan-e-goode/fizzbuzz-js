function Fizzbuzz() {
}

Fizzbuzz.prototype.start = function(start, end) {

  for (i = start; i <= end; i++) {
    if (i % 5 == 0 && i % 3 == 0 && i != 0) {
      console.log("Fizzbuzz");
    }
    else if (i % 5 == 0 && i != 0) {
       console.log("Buzz");
    }
    else if (i % 3 == 0 && i != 0) {
      console.log("Fizz");
    }
    else {
      console.log(i);
    }
  }

};
