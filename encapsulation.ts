// Encapsulation means binding data and methods that operate on that data within one class, and restricting direct access to some of the object’s properties.
class BankAccount {
  private balance: number; // hidden from outside access
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // public method to deposit money
  public deposit(amount: number): void {
    this.balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

const myAccount = new BankAccount(1000);

myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getBalance());
