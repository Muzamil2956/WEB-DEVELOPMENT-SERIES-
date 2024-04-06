let arr = [ 2, 4, 6, 8];
let ans = arr.every((el) => {
    return el % 2 ==0;
});
console.log(ans);  // true becuase there are all even nos if there will be one odd it will return false