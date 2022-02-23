dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

// dojo (global) -> "san jose"
// console -> "san jose"

// dojo (learn) -> "seattle"
// console -> "seattle"
// dojo (learn) -> "burbank"
// console -> "burbank"

// console -> "san jose"
