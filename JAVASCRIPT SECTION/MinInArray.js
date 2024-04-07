let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];
let result = nums.reduce((min, el) => {
    if (el < min) {
        return el;
    }
    else {
        return min;
    }
});
console.log(result);
