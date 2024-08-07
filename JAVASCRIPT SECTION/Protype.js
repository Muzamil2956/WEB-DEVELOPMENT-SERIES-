// Create a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Create a new object
let person = Object.create(Person.prototype);

// Add a method to the prototype
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

// Call the method on the new object
person.sayHello();