let months = ["january", "july", "march", "august"];
months.splice(0, 2);  //deletes ist two strings 
months.splice(0, 0, "july", "june");   // push march, august 
console.log(months); // final july, june, march, august