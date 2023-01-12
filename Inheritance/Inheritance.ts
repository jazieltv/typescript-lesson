class Person {
constructor(private firstName: string, private lastName: string) {
this.firstName = firstName;
this.lastName = lastName;
}
getFullName(): string {
return `${this.firstName} ${this.lastName}`;
}
describe(): string {
return `This is ${this.firstName} ${this.lastName}.`;
}
}

// to inherit a class, use the extends keyword. 
// for example: the following `employee` class inherits the `person` class
// in this example 'Employee' is the child class and 'Person' is the parent class 

class Employee extends Person {
constructor(
firstName: string,
lastName: string,
private jobTitle: string) {

// because the `person` class has a constructor that initializes the firstName and lastName properties
// you need to initialize these properties in the constructor of `Employee` class by calling it's parent
// to do this, that's when we use the super() method 

// call the constructor of the Person class:
super(firstName, lastName);
}
}

// Instance of the `Employee` class:
let employee = new Employee('John','Doe','Front-end Developer');

/* Because the `Employee` class inherits properties and methods of the `Person` class, 
you can call the getFullName() and describe() methods on the employee object as follows: */

let employee = new Employee('John', 'Doe', 'Web Developer');

console.log(employee.getFullName());
console.log(employee.describe()); //method overriding when calling `employee.describe()`

// Output :
// John Doe 
// This is John Doe

