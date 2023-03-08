(function(){
  let result = true
  let yes = true
  let no = false

  result = yes || no
  console.log(`Are either of these true? ` + result)

  result = yes && no
  console.log(`Are both of these true? ` + result)

  result = yes && yes
  console.log(`Is this true? ` + result)
  
  result = no && no
  console.log(`Are any of these true? ` + result)
  
  result = no || no
  console.log(`Are either of these true? ` + result)
})()