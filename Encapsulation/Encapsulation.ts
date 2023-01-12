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

//Encapsulation is the technique of hiding the implementation details of a class from the outside world,
//and only exposing a public interface for interacting with the class.

//encapsulation is required for abstraction
