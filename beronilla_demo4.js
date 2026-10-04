class ATM {
    withdraw(amount) {
        console.log("Processing withdrawal...");
        this.#checkBalance();
        console.log("You withdrew ₱" + amount);
    }

    #checkBalance() {
        console.log("Balance checked.");
    }
}

const atm = new ATM();

atm.withdraw(500);