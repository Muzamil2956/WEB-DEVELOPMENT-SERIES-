let sum = 54; // Global Scope

function calSum(a, b) {
let sum = a+b; // function scope
console.log(sum);
}
calSum(1,2);  // ist pref
console.log(sum);  // 2nd pref