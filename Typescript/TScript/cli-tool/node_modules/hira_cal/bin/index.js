#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets start calculation');
    await sleep();
    rainbowTitle.stop();
}
welcome();
//2pT@(9(h7!wrA&R    50764295
async function askQuestions() {
    let question = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which opeartion do you want to perform? \n",
            choices: ["addition", "subtraction", "multiplication", "division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1",
            validate(answers) {
                if (!answers) {
                    return 'Please enter a number';
                }
                return true;
            }
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2",
        }
    ]);
    async function cal(answers) {
        const num1 = answers.num1;
        const num2 = answers.num2;
        if (answers.operator == "addition") {
            console.log(chalk.yellowBright(`${num1} + ${num2} = ${num1 + num2}`));
        }
        else if (answers.operator == "subtraction") {
            console.log(chalk.yellow(`${num1} - ${num2} = ${num1 - num2}`));
        }
        else if (answers.operator == "multiplication") {
            console.log(chalk.yellow(`${num1} x ${num2} = ${num1 * num2}`));
        }
        else if (answers.operator == "division") {
            console.log(chalk.yellow(`${num1} / ${num2} = ${num1 / num2}`));
        }
    }
    await cal(question);
}
async function startAgain() {
    do {
        await askQuestions();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: chalk.blue.bold("Do you want to continue? Press y or n?")
        });
    } while (again.restart == 'y' || again.restart == 'Y');
}
startAgain();
