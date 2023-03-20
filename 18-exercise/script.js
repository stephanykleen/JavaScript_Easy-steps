// Do while loop

(function doWhile(){
  let i = 2;
  do{
    i *= 2
    console.log('Multiplied Number: ' + i)
  }
  while(i < 1000)
})()


const output = document.querySelector('.output')
output.innerHTML = '';


function launch(){
let i = 10;
while ( i >= 0){
  const para = document.createElement('p');
  if (i === 10){
    para.textContent += 'Countdown: ' + i
  } else if (i === 0){
    para.textContent = 'Blast off!';
  } else{
    para.textContent = i;
  }
  output.appendChild(para);

  i--;
}
}
launch()




function guestList(){
  const people = ['Lola','Macy','John', 'Phil', 'Nancy', 'Logan']
  for(person of people){
  if( person === 'Lola' || person === 'Phil'){
    const refused = document.createElement('p');
    refused.textContent += person + ' Cant go in'
    output.appendChild(refused);
  } else{
    const admitted = document.createElement('p');
    admitted.textContent += person + ' welcome'
    output.appendChild(admitted);
    
  }
}
}
guestList()