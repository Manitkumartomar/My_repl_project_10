//Activity:Write a code to reverse a string;

function reverse(x){
let bag="";
for( let i=x.length-1;i>=0;i--){
  bag=bag+x[i];  //concatenation
}
return bag;
}
let name="manit";
let rev_name=reverse(name);
function check(a,b){
  if(a==b){
    console.log("Palindrome");
  }
  else {
    console.log("Not a palindrome");
  }
}
check(name,rev_name);