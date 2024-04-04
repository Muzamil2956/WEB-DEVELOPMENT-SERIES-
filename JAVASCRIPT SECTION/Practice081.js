let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    console.log("Clear interval ran")
    clearInterval(id);
}, 10000);