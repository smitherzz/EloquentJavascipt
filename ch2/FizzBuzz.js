for (i = 1; i < 101; i++) {
  var phrase = "";
  if (i % 3 == 0) {
    phrase += "Fizz";
  }
  if (i % 5 == 0) {
    phrase += "Buzz";
  }
  console.log(phrase || i);  
}
