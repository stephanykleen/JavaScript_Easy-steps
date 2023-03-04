//Create external script that calls function to output value of global variable

function global(){
  console.log (variable);
}

let variable = 'This is a global variable'
global();

//Create HTML doc including external script and adds similar script -- already done.

// Edit an example so variable is now local.

function local(){
  let variable = 'This is a local variable'
  console.log(variable)
}
local();
