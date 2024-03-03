const calculator = {
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    mul: function(a, b) {
        return a*b;
    }
};
console.log(calculator.add(4, 6));


//  ####  Shorthand ####

// const calculator = {
//     add(a, b) {
//       return a+b;
//     },
//     sub(a, b) {
//       return a-b;
//     }
// };