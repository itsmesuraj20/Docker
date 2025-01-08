// Variable Declarations
let name = "Suraj";
const age = 25;
let isLearning = true;

// Loop to log numbers from 0 to 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Function to greet
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function version of greet
const greetArrow = (name) => `Hello, ${name}!`;


// Check if the button exists before adding an event listener
if (btn) {
    btn.addEventListener('click', () => {
        document.body.style.backgroundColor = 'blue';
    });
} else {
    console.warn('Button with ID "myButton" not found.');
}
