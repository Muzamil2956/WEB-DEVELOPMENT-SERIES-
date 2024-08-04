// Constructor Function
function Person(firstNAme, lastName, Address, Mobile) {
this.firstNAme = firstNAme;
this.lastName = lastName;
this.Address = Address;
this.Mobile = Mobile;
}
  // Instantiate object
 
 const person1 = new Person( 'John', 'Doe', 'USA', 12333);
 const person2 = new Person( 'Jack', 'will', 'India', 4343434);
 console.log(person1);
 console.log(person2);