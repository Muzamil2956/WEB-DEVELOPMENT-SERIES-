// change city to mumbai, add gender, marks = A, and delete something
const student = {
    name: "Muzamil",
    age: 23,
    marks: 94,
    city: "Delhi"
};
console.log(student);
student.city = "Mumbai";
student.gender = "Male";
student.marks = "A";
delete student.marks;
console.log(student);