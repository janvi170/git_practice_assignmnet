\\check weather a string is palindrome or not
    let s="naman"
function reverse(string){
let new_str="";
    for(i=s.length-1;i<=0;i++){
        new_str=string[i];  
}
return new_str;
}
let rev=reverse(s);
if(s=rev){
console.log(s,"is a palindromic string);
}else{
console.log("Not a panlindrome);
}  
