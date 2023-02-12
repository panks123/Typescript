// interfaces
// Interfaces are similar to type aliases, except they only apply to object types. They are like classes in Java but not like actually classes in Javascript
// It specifies the shape of an object

// Convention - Interfaces names also starts with Capital letter 

interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transactions: Transaction[] // stores all the transactions of an account
}

const transaction1: Transaction= {
    payerAccountNumber: 123,
    payeeAccountNumber: 455
}

const transaction2: Transaction= {
    payerAccountNumber: 123,
    payeeAccountNumber: 457
}

const bankAccount1: BankAccount= {
    accountNumber: 123,
    accountHolder: "Pankaj",
    balance: 10000,
    isActive: true,
    transactions: [transaction1, transaction2]
} 