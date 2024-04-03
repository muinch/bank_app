class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    if (isNaN(amount) || amount <= 0) {
      console.error("Invalid deposit amount. Please enter a positive number.");
      return;
    }
    this.balance += amount;
    console.log(`$${amount} deposited successfully.`);
  }

  withdraw(amount) {
    if (isNaN(amount) || amount <= 0) {
      console.error(
        "Invalid withdrawal amount. Please enter a positive number."
      );
      return;
    }
    if (amount > this.balance) {
      console.error("Insufficient funds.");
      return;
    }
    this.balance -= amount;
    console.log(`$${amount} withdrawn successfully.`);
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance.toFixed(2)}`); // Format balance to two decimal places
  }
}

// Create two bank account instances
const account1 = new BankAccount(1001, "John Doe", 700);
const account2 = new BankAccount(1002, "Jane Smith", 500);

// Demonstrate functionalities
console.log("**Account 1**");
account1.deposit(200);
account1.withdraw(100);
account1.displayAccountInfo();

console.log("\n**Account 2**");
account2.deposit(150);
account2.withdraw(800); // Should display "Insufficient funds."
account2.displayAccountInfo();
