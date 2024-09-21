// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in

let som;
let getaal1 = parseFloat( await userInput.question('Geef een eerst getaal in? '));
let getaal2 = parseFloat( await userInput.question('Geef een tweede getaal in? '));
som = getaal1 + getaal2;

console.log('Het som van de getalen dit heeft ingegeven is: ');

process.exit();
