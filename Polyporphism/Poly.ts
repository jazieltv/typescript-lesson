interface Person {
  name: string;
  getName(): string;
}
// person interface with name and getName fields
// student interface has the exact same fields `Person` has + an extra marks field
// because we have inherited `Person` inside `Student`

interface Student extends Person {
  marks: number;
}

// print name of a `Person` object
const printName = (person: Person) => person.getName(); // this function accepts an argument of type `Person`
// which means it expects an object with name and getName fields.

// instance of `Person`
let ross: Person = {
  name: "Ross Geller",
  getName() {
    return this.name;
  },
};

// both ross and monica objects contain the exact same fields within the `Person` interface

// instance of `Student`
let monica: Student = {
  name: "Monica Geller",
  marks: 84,
  getName() {
    return this.name;
  },
};

// while as jack is a plain object, and defines its own implicit interface

// plain JavaScript object
let jack = {
  name: "Jack Geller",
  age: 60,
  getName() {
    return this.name;
  },
};

// print full-names of the objects
console.log(printName(ross));
console.log(printName(monica));
console.log(printName(jack));

/* The 'printName' function accepted both monica and jack as a valid argument
      since they have all the properties as described by the Person interface. 
      This is very hard to implement in JavaScript since shape-based polymorphism doesn't exist in JavaScript.
      TypeScript FOR THE WINNN !!*/

// The program compiles and runs just fine.
// This is due to the fact that TypeScript’s type system is based on the shape of the values
// and not on what concrete type values have.

//many=forms
//tehcnnique that that allows to replace conditionals
//allows you to create a class that has more thsn one form
