function sum (...args){
    for (let i=0; i < args.length; i++) {
        console.log(" you gave us: ", args[i]);
    }
}
console.log(sum(1, 2));