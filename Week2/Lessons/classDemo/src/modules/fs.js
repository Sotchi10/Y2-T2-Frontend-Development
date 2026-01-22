
// fs.writeFileSync("test.txt", "Hello ll okay");
// console.log("FS Success");
// fs.appendFileSync("test.txt", "Hello ldfsdf okay");
// console.log("FS Success");

var fs = require("fs");

import PromptSync from "prompt-sync";
const prompt = PromptSync();

while(true){
    var txt = prompt("Enter file data: ");
    if(txt=='exit') break;
    // fs.writeFileSync("test.txt", "This is a test file for TestFS module.");
    fs.appendFileSync("test.txt", txt, '\n');
    console.log("✅ File created: test.txt");
}

