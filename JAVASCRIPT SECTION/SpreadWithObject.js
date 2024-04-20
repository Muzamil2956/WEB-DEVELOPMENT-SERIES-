const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};
let dataCopy={ ...data, id: 123};
console.log(dataCopy);