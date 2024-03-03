// takes one or multiple functions as arguments

function multipleGreet( func, n) {  // n is count 
    for(let i =1; i<=n; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}
multipleGreet(greet, 2);