//Step 1: Superman is planning to add two numbers, send the answer to batman.
//Step 2: Batman will take the answer from Superman and square it.
//Step 3: Shaktimaan is taking the answer from batman and dividing it by 10.
function superman(a,b){
  return a+b;
}
function batman(x){
  return x**2;
}
function shaktimaan(y){
  console.log(y/10);
}
let step1=superman(5,5);
let step2=batman(step1);
shaktimaan(step2);