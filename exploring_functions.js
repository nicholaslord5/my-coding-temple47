let balance = 0;

function deposit(amount) {
  if (amount <= 0) {
    console.log("Please enter deposit amount.");
  } else {
    balance += amount;
    console.log(`Deposited $${amount}. Current balance: $${balance}`);
  }
}

function withdraw(amount) {
  if (amount <= 0) {
    console.log("Please enter withdrawal amount.");
  } else if (amount > balance) {
    console.log("Insufficient funds.");
  } else {
    balance -= amount;
    console.log(`Withdrew $${amount}. Current balance: $${balance}`);
  }
}

function checkBalance() {
  console.log(`Current balance: $${balance}`);
}
