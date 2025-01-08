let name = "Suraj";
const age = 25;
let isLearning = true;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

function greet(name) {
    return `Hello, ${name}!`;
}
const greetArrow = (name) => `Hello, ${name}!`;

const btn = document.getElementById('myButton');

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});

const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
};
fetchData();

