// Procedural method
let a = 'Stephany';
let b = 'knows coding'

function Code (){
  return a + " " + b
}
console.log(Code())



//Encapsulation method in OOP

let objVar = {
  a: 'Stephany',
  b: 'knows coding',
  code: function(){
  return this.a + " " + this.b}
  
  }
  console.log(objVar.code())
