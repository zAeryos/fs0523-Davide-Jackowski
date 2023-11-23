class SonAccount {

    private balanceInit: number;

    constructor (_balanceInit: number = 0) {
        this.balanceInit = _balanceInit;
        console.log('Account has been created.');
    }

    public depositMoney (amount: number): void {
        this.balanceInit += amount;
        console.log('Money deposited successfully, your new balance is: ' + this.balanceInit + '$.')
    }

    public withdrawMoney (amount: number): void {
        if (this.balanceInit >= amount) {
            this.balanceInit -= amount;
            console.log('Money withdrawn successfully, your new balance is ' + this.balanceInit + '$.')
        } else {
            console.log(`I'm sorry, ya broke`);
        }
    }

    public getBalance (): number {
        console.log('Funds available in your account: ')
        return this.balanceInit;
    }
}

class MotherAccount extends SonAccount {

    public addInterest(): void {
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

console.log('The two accounts together have ' + (sonAccount.getBalance() + motherAccount.getBalance()) + '$.')