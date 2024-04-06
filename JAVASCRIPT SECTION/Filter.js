let num = [2, 4, 3, 5, 10, 20, 17, 13 ];
let ans = num.filter((el) =>{
   return el % 2 == 0;  // even for true, odd for false
});
console.log(ans);