// // npm install --save-dev @types/inquirer
/*
Name: Afaque Ahmed Abbasi
Roll No: PIAIC227902
City: Karachi
Batch: 51
*/
import inquirer from "inquirer";
async function startGame() {
    const secretNum = Math.floor(Math.random() * 10 + 1);
    async function playRound() {
        const userInput = await inquirer.prompt({
            type: "number",
            name: "userNum",
            message: "Enter your number"
        });
        const userNum = userInput.userNum;
        if (userNum === secretNum) {
            console.log("Congratulations! Your guessed number is correct.");
            return true;
        }
        else {
            if (userNum > secretNum) {
                console.log("Your guessed number is greater than the actual number.");
            }
            else if (userNum < secretNum) {
                console.log("Your guessed number is less than the actual number.");
            }
            return false;
        }
    }
    let isGuessed = false;
    let attempts = 0;
    console.log("\nNumber Guessing Game!");
    while (!isGuessed) {
        attempts++;
        console.log(`Your Attempt Number ${attempts}`);
        isGuessed = await playRound();
    }
    console.log(`You have attempted ${attempts} times to guess the right number.`);
}
startGame();
