// Inheritance allows a class (child) to reuse properties and methods of another class (parent).

class Animal {
  eat(): void {
    console.log("The animal is eating");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("The dog is barking");
  }
}

const myDog = new Dog();
myDog.eat(); // Inherited from Animal
myDog.bark();
