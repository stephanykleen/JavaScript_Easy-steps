(function(){
  const numOne = 8, numTwo = 3
  let verb = (numOne !== 1) ? 'Are ' : 'Is '
  console.log('There ' + verb + numOne);
  let parity = (numTwo % 2 !== 0) ? 'Odd' : 'Even'
  console.log(numTwo + ' is '+ parity)
   parity = (numOne % 2 !== 0) ? 'Odd' : 'Even'
  console.log(numOne + ' is '+ parity)
  let greatNum = (numOne > numTwo) ? numOne : numTwo
  console.log( greatNum +' is the greater number')
})()