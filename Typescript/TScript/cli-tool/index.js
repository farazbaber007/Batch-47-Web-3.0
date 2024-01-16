#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
function welcome() {
    return __awaiter(this, void 0, void 0, function* () {
        let rainbowTitle = chalk_animation_1.default.rainbow('Lets start calculation');
        yield sleep();
        rainbowTitle.stop();
    });
}
welcome();
//2pT@(9(h7!wrA&R    50764295
function askQuestions() {
    return __awaiter(this, void 0, void 0, function* () {
        let question = yield inquirer_1.default
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
        function cal(answers) {
            return __awaiter(this, void 0, void 0, function* () {
                const num1 = answers.num1;
                const num2 = answers.num2;
                if (answers.operator == "addition") {
                    console.log(chalk_1.default.yellowBright(`${num1} + ${num2} = ${num1 + num2}`));
                }
                else if (answers.operator == "subtraction") {
                    console.log(chalk_1.default.yellow(`${num1} - ${num2} = ${num1 - num2}`));
                }
                else if (answers.operator == "multiplication") {
                    console.log(chalk_1.default.yellow(`${num1} x ${num2} = ${num1 * num2}`));
                }
                else if (answers.operator == "division") {
                    console.log(chalk_1.default.yellow(`${num1} / ${num2} = ${num1 / num2}`));
                }
            });
        }
        yield cal(question);
    });
}
function startAgain() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            yield askQuestions();
            var again = yield inquirer_1.default
                .prompt({
                type: "input",
                name: "restart",
                message: chalk_1.default.blue.bold("Do you want to continue? Press y or n?")
            });
        } while (again.restart == 'y' || again.restart == 'Y');
    });
}
startAgain();
