let i = 0;
let j = 0;

for(i = 0; i < 3; i++){
  console.log('Outer Loop: ' + i)
  for(j = 1; j < 4; j++){
    if(i=== 1 && j === 2){
      console.log('\tSkipped: ' + j)
      continue}
    if(i=== 2 && j === 2){
        console.log('\tBroken: ' + j)
        break}
    console.log('\tInner loop: ' + j)
  }
}