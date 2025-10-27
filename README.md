# OOP Concepts with TypeScript

This project demonstrates Object-Oriented Programming (OOP) concepts using TypeScript.

## Project Structure

- `encapsulation.ts` - Example of **Encapsulation** in OOP

## Concepts Covered

### Encapsulation

Encapsulation is one of the four fundamental OOP concepts that bundles data (properties) and methods together while hiding internal details from the outside world.

**Key Features:**

- **Private members**: Data is hidden and cannot be accessed directly from outside the class
- **Public methods**: Controlled access to private data through getter and setter methods
- **Data protection**: Prevents invalid or unauthorized access to sensitive information

## Example: BankAccount Class

The `BankAccount` class demonstrates encapsulation by:

- Keeping the `balance` private
- Providing public methods (`deposit`, `withdraw`, `getBalance`) to interact with the balance
- Validating operations (e.g., preventing withdrawals that exceed the balance)

```typescript
class BankAccount {
  private balance: number; // Hidden from outside access

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
```

## How to Run

### Prerequisites

- Node.js installed
- TypeScript installed globally (`npm install -g typescript`)

### Steps

1. **Compile TypeScript to JavaScript:**

   ```powershell
   tsc encapsulation.ts
   ```

2. **Run the compiled JavaScript:**

   ```powershell
   node encapsulation.js
   ```

3. **Or compile and run in one command:**
   ```powershell
   tsc encapsulation.ts; node encapsulation.js
   ```

### Expected Output

```
1300
```

## Usage Example

```typescript
const myAccount = new BankAccount(1000);

myAccount.deposit(500); // Balance: 1500
myAccount.withdraw(200); // Balance: 1300
console.log(myAccount.getBalance()); // Outputs: 1300
```

## Benefits of Encapsulation

- ✅ Data security and protection
- ✅ Controlled access to class members
- ✅ Easier maintenance and refactoring
- ✅ Prevents accidental modification of critical data
- ✅ Allows implementation changes without affecting external code
