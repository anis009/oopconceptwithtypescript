// Abstraction means hiding complex implementation details and exposing only necessary functionality to the user.

abstract class Vehicle {
  abstract startEngine(): void; // only define behavior
  abstract stopEngine(): void;
  move(): void {
    console.log("The vehicle is moving");
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine started");
  }
  stopEngine(): void {
    console.log("Car engine stopped");
  }
}

const car = new Car();

car.startEngine();
car.move();
car.stopEngine();
