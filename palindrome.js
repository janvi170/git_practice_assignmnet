
//check weather a string is palindrome or not

function checkPalindrome(str) {  
    
    const len = str.length;  
  
   
    for (let i = 0; i < len / 2; i++) {  
      
        if (str[i] !== str[len - 1 - i]) {  
          console.log( 'It is not palindrome'); 
          return;
        }  
    }  
  
    console.log( 'It is a palindrome');  
}  
  

 
  
const value = checkPalindrome('naman');  

console.log(value);  
