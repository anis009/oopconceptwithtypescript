// Polymorphism means “many forms” — the same method name behaves differently depending on the object that calls it.

class Bird {
  makeSound(): void {
    console.log("Chirp Chirp");
  }
}

class Rat {
  makeSound(): void {
    console.log("Squeak Squeak");
  }
}

function playSound(animal: Bird | Rat): void {
  animal.makeSound();
}

const myBird = new Bird();
const myRat = new Rat();

playSound(myBird);
playSound(myRat);
