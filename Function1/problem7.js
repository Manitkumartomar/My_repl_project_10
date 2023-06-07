function getnumber(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    let fac = 1;
    for (let j = i; j >= 1; j--) {
      fac = fac * j;
    }
    if ( fac % 45 === 0) {
      console.log(fac);
      arr.push(i);
    }
  }
  console.log(arr);
}
getnumber(23);