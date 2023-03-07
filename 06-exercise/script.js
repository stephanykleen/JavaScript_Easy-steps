
let variable = (function(){
  let local = 0;
  const nested = function(){ return local = local + 1}
  return nested
})()


console.log(variable())
console.log(variable())
console.log(variable())
console.log(variable.prototype)

