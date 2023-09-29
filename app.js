import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "string",
        name: "userid",
        message: "kindly enter your id:"
    },
    {
        type: "number",
        name: "userpin",
        message: "kindly enter your pin:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "saving"],
        message: "select your account type"
    },
    {
        type: "list",
        name: "transctionType",
        choices: ["fast cash", "withdraw",],
        message: "enter your transctiontype ",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: ["500", "1000", "1500", "2000", "2500", "3000", "3500", "4000", "4500", "5000"],
        message: "select your amount ",
        when(answers) {
            return answers.transactionType == "fast cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "enter your amount ",
        when(answers) {
            return answers.transactionType = "withdraw ";
        },
    },
]);
if (answers.userid && answers.userpin) {
    let balance = Math.ceil(Math.random() * 10000);
    console.log(balance);
    let enteredamount = answers.amount;
    if (balance >= enteredamount) {
        let remaining = balance - enteredamount;
        console.log("your remaining balance is", remaining);
    }
    else {
        console.log("Insuficient Balance");
    }
}
console.log(answers);
