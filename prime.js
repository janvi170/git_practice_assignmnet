//check weather a number is prime or not
function checkPrime(n){
  //let i=2
  let flag=false
  for(let i=2;i<n;i++){
    if(n%i===0){
    flag=true 
      break
    }
    else{
      continue
      
    }
  }
  if(flag){
    console.log('Not Prime')
  }
    else if(n<2){
      console.log('Not Prime')
    }
  else{
    console.log('Prime')
  }
}

checkPrime(17)