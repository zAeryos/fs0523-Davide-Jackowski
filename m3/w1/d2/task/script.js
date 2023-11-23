"use strict";
class SonAccount {
    constructor(_balanceInit = 0) {
        this.balanceInit = _balanceInit;
        console.log('Account has been created.');
    }
    depositMoney(amount) {
        this.balanceInit += amount;
        console.log('Money deposited successfully, your new balance is: ' + this.balanceInit + '$.');
    }
    withdrawMoney(amount) {
        if (this.balanceInit >= amount) {
            this.balanceInit -= amount;
            console.log('Money withdrawn successfully, your new balance is ' + this.balanceInit + '$.');
        }
        else {
            console.log(`I'm sorry, ya broke`);
        }
    }
    getBalance() {
        console.log('Funds available in your account: ');
        return this.balanceInit;
    }
}
class MotherAccount extends SonAccount {
    addInterest() {
        const interest = this.getBalance() * 0.10;
        this.depositMoney(interest);
    }
}
const sonAccount = new SonAccount(1500);
console.log('Currently, you have ' + sonAccount.getBalance() + '$ in your bank account.');
sonAccount.depositMoney(300);
sonAccount.withdrawMoney(300);
sonAccount.withdrawMoney(2000);
const motherAccount = new MotherAccount(5000);
console.log('Currently, you have ' + motherAccount.getBalance() + '$ in your bank account.');
motherAccount.depositMoney(6000);
motherAccount.withdrawMoney(1500);
motherAccount.withdrawMoney(25000);
motherAccount.addInterest();
console.log('The two accounts together have ' + (sonAccount.getBalance() + motherAccount.getBalance()) + '$.');
