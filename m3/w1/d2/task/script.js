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
        this.oneDeposit(interest);
    }
}
const sonAccount = new SonAccount(1500);
console.log(sonAccount.getBalance());
sonAccount.oneDeposit(300);
sonAccount.oneWithdraw(300);
sonAccount.oneWithdraw(2000);
const motherAccount = new MotherAccount(5000);
console.log(motherAccount.getBalance());
motherAccount.oneDeposit(6000);
motherAccount.oneWithdraw(1500);
motherAccount.addInterest();
