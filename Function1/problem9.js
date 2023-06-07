//Using even or odd function calculate the sum of even numbers in the array;
function check(num){
if(num%2==0){
  return true;
}
else {
  return false;
}
}

let x=[1,2,3,,4,5,6,7,8,9,10,11,12,13,14,15];
let sum=0;
for(i=0;i<=x.length;i++){
  if(check(x[i])==true){
    sum=sum+x[i];
  }
}
console.log(sum);


let sum_odd=0;

for(i=0;i<=x.length;i++){
  if(check(x[i])==false){
    sum_odd=sum_odd+x[i];
  }
}
console.log(sum_odd);