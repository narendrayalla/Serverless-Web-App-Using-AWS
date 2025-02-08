const form = document.querySelector('form');
const greeting = document.querySelector('#greeting');
const nameInput = document.querySelector('#name');
const counter = document.querySelector('.counter-number');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    if (name) {
        greeting.textContent = `Hello, ${name}! Welcome to the app.`;
        greeting.style.color = "#28a745";
        greeting.style.fontSize = "1.3rem";
    } else {
        greeting.textContent = "Please enter your name.";
        greeting.style.color = "#dc3545";
    }
});

async function updateCounter() {
    try {
        let response = await fetch(
            "https://wnnwyifmlcvokbfheq2tnwrc3y0rbblo.lambda-url.us-east-1.on.aws/"
        );
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        counter.innerHTML = "Views: Unable to fetch";
        console.error("Error fetching views count:", error);
    }
}
updateCounter();
