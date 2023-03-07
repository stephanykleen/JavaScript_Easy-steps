//Create self-invoking anonymous function block declaring 3 variables

(function(){
  let a = 'first variable', b = '4', c = 5
  console.log(`sum: ${c + c}`)
  console.log(`variable c type: ` + typeof c)
  console.log(`variable a type: `+ typeof a)
  console.log(parseInt(b) + ` number`)
  console.log(parseInt(b)+ " turned number from " + typeof b)
})()