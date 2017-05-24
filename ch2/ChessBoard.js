var size = 8;
for (i = 2; i <= size; i++) {
  var output = "";
  for (x = 1; x <= size; x++) {
    if ((x + i) % 2 == 0) {
      output += "#";
    } else {
      output += " ";
    }
  }
  output += "\n";
  console.log(output);
}
