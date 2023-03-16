
// Regular for loop example

(function(){
  let i = 0;
  for(let i = 0; i <= 10; i++){
    console.log("Iteration number: " + i)
  }
})()

// for loop in array



function countries(){ 
  const arr = ['Peru', 'Argentina', 'Chile', 'Bolivia', 'Brazil', 'Argentina']
  for(country of arr){
    console.log(country)
  }}

countries()

// Using Map() to modify array values and create new array with them.

function array(){ 
  const arr = ['Peru', 'Argentina', 'Chile', 'Bolivia', 'Brazil', 'Argentina']
  const arrModified = arr.map(string => string.toUpperCase() )
  console.log(arrModified)
  }

array()

// Using filter() to modify an array and access specific values containing exact match

function filteredArray(){
  const arr = ['Peru', 'Argentina', 'Chile', 'Bolivia', 'Brazil', 'Argentina']
  const filteredArr = arr.filter((string) => {return string.endsWith('a')})
  console.log(filteredArr)
}
filteredArray()