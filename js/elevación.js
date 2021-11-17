// 7

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

// dojo1 -> "san jose"
// console de 'san jose'
// dojo2 -> 'seattle'
// console de 'seattle'
// dojo2 -> 'burbank'
// console de 'burbank'
// console de 'san jose'
