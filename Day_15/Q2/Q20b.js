function createBankAccount() {
    let balance = 0;

    return {
        deposit(amount){
            balance += amount;
            console.log(`Deposited: ${amount}`);
        },
        withdraw(amount) {
            if(amount > balance) {
                console.log("Insufficient balance");
            }
            else{
                balance -= amount;
                console.log(`Withdraw: ${amount}`);
            }
        },
        getBalance() {
            return balance;
        }
    };
}
const account = createBankAccount();
account.deposit(500); 
account.withdraw(200); 
account.withdraw(400);
console.log(account.balance); 