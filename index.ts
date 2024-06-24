#! /usr/bin/env node


import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {message:"Enter First Number", type:"number", name:"firstNumber"},
    {message:"Enter Second Number", type:"number", name:"secondNumber"},
    {message:"Select operation", type:"list", name:"operator",
        choices:["Add", "Subtract", "Multiply", "Devide", "Remainder", "Power", "SqaureRoot"]
    }
])

// Making Changes for GitHub:
// 1) Removing the initail : if(answer.operator === "Subtract")
// 2) console an ending message:


if(answer.operator === "Add") {
    console.log(`${answer.firstNumber} + ${answer.secondNumber} = ${answer.firstNumber+answer.secondNumber}`)
}
else if(answer.operator === "Subtract") {
    console.log(`${answer.firstNumber} - ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}`)
}
else if(answer.operator === "Multiply") {
    console.log(`${answer.firstNumber} x ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`)
}
else if(answer.operator === "Devide") {
    console.log(`${answer.firstNumber} / ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`)
}
else if(answer.operator === "Remainder") {
    console.log(`${answer.firstNumber} / ${answer.secondNumber}, Remainder is: ${answer.firstNumber % answer.secondNumber}`)
}
else if (answer.operator === "Power") {
    console.log(`${answer.firstNumber} power ${answer.secondNumber} = ${Math.pow(answer.firstNumber, answer.secondNumber)}`)
}
else if(answer.operator === "SqaureRoot") {
    console.log(`Square root of ${answer.firstNumber} is: ${Math.sqrt(answer.firstNumber)}`)
    console.log(`Square root of ${answer.secondNumber} is: ${Math.sqrt(answer.secondNumber)}`)
}

console.log('Simple Calculator Ends here')
