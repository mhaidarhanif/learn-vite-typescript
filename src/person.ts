const person = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(person.name);
