let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

class Transaction {
    constructor(date, desc, type, amount) {
        this.date = date;
        this.desc = desc;
        this.type = type;
        this.amount = amount;
    }

}

if (transactions.length === 0) {
    transactions = [
        new Transaction('4/17/2023', 'Payroll', 'Credit', 2467.52),
        new Transaction('4/20/2023', 'ATM #2134', 'Debit', 20.00),
        new Transaction('4/22/2023', 'Publix', 'Debit', 34.79),
        new Transaction('4/24/2023', 'Tuscan Grille', 'Debit', 78.66),
        new Transaction('4/27/2023', 'Chipotle', 'Debit', 24.76),
        new Transaction('4/29/2023', 'Laser Tag', 'Debit', 49.87),
        new Transaction('5/1/2023', 'Payroll', 'Credit', 2467.52),
        new Transaction('5/2/2023', 'Babysitting', 'Credit', 75.00),
        new Transaction('5/2/2023', 'Uber Eats Refund', 'Credit', 33.12),
        new Transaction('5/3/2023', 'Venmo Transfer', 'Credit', 25.00)   
    ];

    localStorage.setItem('transactions', JSON.stringify(transactions));
}


function showTransactions() {
    let table = document.getElementById('transaction-history');
    table.innerHTML = ""

    let headingsRow = table.insertRow(); // add a row for the headings

    let dateHeading = headingsRow.insertCell(0);
    dateHeading.innerHTML = "Date";
  
    let descHeading = headingsRow.insertCell(1);
    descHeading.innerHTML = "Description";
  
    let typeHeading = headingsRow.insertCell(2);
    typeHeading.innerHTML = "Type";
  
    let amountHeading = headingsRow.insertCell(3);
    amountHeading.innerHTML = "Amount";

    for (let i = 0; i < transactions.length; i++) {
        let transaction = transactions[i];

        let row = table.insertRow();
    
        let dateCell = row.insertCell(0);
        dateCell.innerHTML = transaction.date;
    
        let descCell = row.insertCell(1);
        descCell.innerHTML = transaction.desc;
    
        let typeCell = row.insertCell(2);
        typeCell.innerHTML = transaction.type;
    
        let amountCell = row.insertCell(3);
        amountCell.innerHTML = '$' + transaction.amount.toFixed(2);
    }
}

showTransactions();

function updateBalance() {

    let credit = 0;
    let debit = 0;
    
    for (let i = 0; i < transactions.length; i++) {
        let transaction = transactions[i];
    
        if (transaction.type === "Credit") {
            credit += transaction.amount
        } else if (transaction.type === "Debit") {
            debit += transaction.amount
        }

    }
    
    let availableBalanceSpan = document.getElementById("current-bal")
    
    let availableBalance = credit - debit
    availableBalanceSpan.innerHTML = availableBalance.toFixed(2)

    return availableBalance.toFixed(2)
}

updateBalance()

function showBalanceDiv() {

    let updateBalanceDiv = document.getElementById("updateBalance")
    updateBalanceDiv.style.display = "block";

    let currentBal = document.getElementById("updateBalanceTotal")
    let availableBalance = updateBalance()
    currentBal.innerHTML = "$" + availableBalance

    let amountInput = document.getElementById("amount");
    amountInput.value = ""
    let descInput = document.getElementById("description");
    descInput.value = ""

}

function deposit() {
    let date = new Date().toLocaleDateString()
    let desc = document.getElementById("description").value
    let type = "Credit"
    let amount = parseFloat(document.getElementById("amount").value)
    let newTransaction = new Transaction(date, desc, type, amount)
    transactions.push(newTransaction)

    localStorage.setItem('transactions', JSON.stringify(transactions))
    updateBalance()
    showTransactions()
    
    hideDiv()
}

function withdraw() {
    let date = new Date().toLocaleDateString()
    let desc = document.getElementById("description").value
    let type = "Debit"
    let amount = parseFloat(document.getElementById("amount").value)
    let newTransaction = new Transaction(date, desc, type, amount)
    transactions.push(newTransaction)

    localStorage.setItem('transactions', JSON.stringify(transactions))
    updateBalance()
    showTransactions()
    
    hideDiv()
}

