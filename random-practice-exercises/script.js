// Write a function called add7 that takes one number and returns that number + 7.

function add7(number){
  let input = Number(number) + 7;
  return input
}
console.log(add7(4))

// Write a function called multiply that takes 2 numbers and returns their product.

function multiply(x,y){
  return x*y
}
console.log(multiply(2,5))
// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(string){
  let lowerString = string.toLowerCase();
  let formatting = lowerString.charAt(0).toUpperCase() + lowerString.slice(1);
  return formatting
}
console.log(capitalize('JulIaNNa'))
// Write a function called lastLetter that takes a string and returns the very last letter of that string:lastLetter("abcd") should return "d"

function lastLetter(string){
  return string.charAt(string.length - 1);
}
console.log(lastLetter('juliana'))