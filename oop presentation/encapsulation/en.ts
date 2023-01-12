class Person {
  constructor(private name: string, private age: number) {}

  introduce(): void {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Object of the `Person` class
const person = new Person("Jaziel", 23);

console.log(person.name); // error: Property 'name' is private and can only be accesible within class `person`

console.log(person.age); // error: Property 'age' is private and can only be accesible within class `person`

person.introduce(); // prints "Hi, my name is Jaziel and I am 23 years old. "

// This method comes when you want to access any property of
// an object. A getter is also called an accessor. setter: This
// method comes when you want to change any property of an object

//group related variables and functions that operate on them
//into objects, which turns into encapsulation

//encapsulation is required for abstraction
