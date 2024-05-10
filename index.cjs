"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require('inquirer');
//Cereate a My Bank
var myBank = {
    name: "myBank",
    balance: 20000,
    transactions: ["\"deposit\"", "\"withdrawal\""],
};
function start(bank) {
    console.log("Welcome to ".concat(bank.name));
    var question = [];
    if (bank.balance === 20000)
        question.push({
            type: "input",
            message: "you have a an exsitng account with us ".concat(bank.balance),
            name: 'existingAccount'
        });
}
