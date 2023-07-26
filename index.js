// need variables to import inquirer, fs, and shapes.js
import inquirer from "inquirer";
import fs from "fs";
import {Circle, Square, Triangle} from "./lib/shapes.js";
// need variable for question array 
const questions = [
{
    type: "input",
    name: "text",
    message: "What do you want the text to say?"
},
{
    type: "input",
    name: "textColor",
    message: "What do you want the text color to be?"
},
{
    type: "list",
    name: "type",
    message: "What shape do you want?",
    choices: ['Circle', 'Square', 'Triangle']
},
{
    type: "input",
    name: "color",
    message: "What color do you want the shape to be?"
}
]

// need to prompt on init
inquirer.prompt(questions)
.then(({text, textColor, type, color}) => {
    if(text.length > 3) {
        throw new Error('Text must be 3 characters or less.')
    }

    let shape;
    switch(type) {
        case "Circle":
            shape = new Circle(text, textColor, color).svg();
            break;
        
        case "Square":
            shape = new Square(text, textColor, color).svg();
            break;
        
        case "Triangle":
            shape = new Triangle(text, textColor, color).svg();
            break;
    }

    fs.writeFile("examples/newShape.svg", shape, (err) =>
    err ? console.error(err) : console.log('Success!'))
});
