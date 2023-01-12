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

class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // because the `person` class has a constructor that initializes the firstName and lastName properties
    // you need to initialize these properties in the constructor of `Employee` class by calling it's parent
    // to do this, that's when we use the super() method

    // call the constructor of the Person class:
    super(firstName, lastName);
  }
}

// Instance of the `Employee` class:
let employee = new Employee("John", "Doe", "Front-end Developer");

//Because the `Employee` class inherits properties and methods of the `Person` class,
//you can call the getFullName() and describe() methods on the employee object as follows:

let employee = new Employee("John", "Doe", "Web Developer");

console.log(employee.getFullName());
console.log(employee.describe()); //method overriding when calling `employee.describe()`

// Output :
// John Doe
// This is John Doe

//<-------------------------------------------------------------------------------->
//When you call the employee.describe() method on the employee object, the describe()
//method of the Person class is executed that shows the message: This is John Doe.

//If you want the Employee class has its own version of the describe() method, you can
// define it in the Employee class like this:

class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super(firstName, lastName);
  }
  //line54 is calling the describe method from the parent class, thats why tehe syntax is like
  // that+its overriding and adding the extra text at the end
  describe(): string {
    return super.describe() + `I'm a ${this.jobTitle}.`;
  }
}

let employee = new Employee("John", "Doe", "Web Developer");
console.log(employee.describe());
//This is John Doe.I'm a Web Developer.
