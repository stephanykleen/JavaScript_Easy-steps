function square(argument){
  return argument * argument
}

function addition(x, y= 10){
  return x + y
}
console.log (addition(5,4)) // omits the value 10 passed on the parameter.

function combine (argument){
let result = square(argument);
return result + addition(argument) // takes the second parameter 10 as there is one parameter assigned only.
}

console.log(combine(5))
console.log('8 x 8: ' + square(8,8))
console.log('8 + 20: ' + addition(8,20))
console.log('8 + 10: ' + addition(8))
console.log('(8 x 8) + (8 + 10): ' + combine(8))