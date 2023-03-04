// function that has not been declared
notDeclared()

console.log('Hoisted: ' + notDeclared(4,2));

function notDeclared(x,y){
  return x + y
}

// Assign function to a variable
let variable = notDeclared 
console.log('Assigned: ' + variable(39,2));

//Assign anonymous function to variable

let secretFunction = function(x,y){
  let result = x + y;
  return result
}
console.log('Anonymous: ' + secretFunction(8,3))

let selfInvoke = (function(){
  let variable = 'Sel Invoked Output: ';
  return variable
})()
console.log(selfInvoke)