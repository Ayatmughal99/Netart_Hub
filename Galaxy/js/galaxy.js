// Initialize the planets and questions
let planets = document.querySelectorAll('.planet');
let currentPlanet = 0;
let questions = [
    { question: "What is the color of Mars?", answer: "Red" },
    { question: "Which planet is known as the Giant Planet?", answer: "Jupiter" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "Which planet is closest to the Sun?", answer: "Mercury" },
    { question: "What is the name of the planet with rings?", answer: "Saturn" },
    { question: "What planet is famous for its Great Red Spot?", answer: "Jupiter" },
    { question: "Which planet has the longest day?", answer: "Venus" },
    { question: "Which planet is the hottest in the solar system?", answer: "Venus" },
    { question: "Which planet has the most moons?", answer: "Jupiter" },
    { question: "Which planet is known as the 'Earth's twin'?", answer: "Venus" },
    { question: "Which planet has the largest volcano in the solar system?", answer: "Mars" },
    { question: "What is the name of the moon of Saturn that might have life?", answer: "Enceladus" }
];

// Shuffle questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Hide all planets initially
function hideAllPlanets() {
    planets.forEach(planet => {
        planet.style.opacity = "0.5"; // Planets are "locked" initially
        planet.style.cursor = "not-allowed"; // Disable clicking
    });
}

// Unlock a specific planet when the answer is correct
function unlockPlanet(planetIndex) {
    planets[planetIndex].style.opacity = "1"; // Make planet visible
    planets[planetIndex].style.cursor = "pointer"; // Allow clicking
    planets[planetIndex].disabled = false; // Make the planet clickable
}

// Function to display a challenge for a planet
function displayChallenge(planetIndex) {
    let challengeContainer = document.getElementById("challenge-container");
    let challengeText = document.getElementById("challenge-text");
    let inputField = document.getElementById("answer-input");
    let feedback = document.getElementById("feedback");

    challengeText.innerText = questions[planetIndex].question;
    challengeContainer.style.display = "block"; // Show challenge area
    feedback.innerText = ""; // Clear previous feedback

    inputField.value = ""; // Clear input field
    inputField.focus(); // Focus on the input field
}

// Function to check the answer and proceed
function checkAnswer() {
    let inputField = document.getElementById("answer-input");
    let feedback = document.getElementById("feedback");

    let currentQuestion = questions[currentPlanet];

    if (inputField.value.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
        feedback.innerText = "Correct! Moving to the next planet...";

        // Unlock the next planet
        currentPlanet++;

        if (currentPlanet < planets.length) {
            unlockPlanet(currentPlanet); // Unlock the next planet
        }

        // Hide the challenge container
        document.getElementById("challenge-container").style.display = "none";

        // If all questions are answered, show the reward
        if (currentPlanet === planets.length) {
            showReward();
        }
    } else {
        feedback.innerText = "Incorrect. Try again.";
    }
}

// Add event listeners to planets
planets.forEach((planet, index) => {
    planet.addEventListener('click', function () {
        if (index === currentPlanet) {
            displayChallenge(index); // Show the challenge if the planet is unlocked
        }
    });
});

// Initially hide all planets and unlock the first one
hideAllPlanets();
unlockPlanet(0); // Unlock the first planet again

// Show reward at the end of the game
function showReward() {
    document.getElementById("reward-message").style.display = "block"; // Show reward message
    document.getElementById("balloons").style.display = "block"; // Show balloons
}

// Restart the game
function restartGame() {
    currentPlanet = 0; // Reset the game to the first planet
    hideAllPlanets();
    unlockPlanet(0); // Unlock the first planet again
    document.getElementById("challenge-container").style.display = "none"; // Hide the challenge container
    document.getElementById("feedback").innerText = ""; // Clear any feedback
    document.getElementById("reward-message").style.display = "none"; // Hide reward message
    document.getElementById("balloons").style.display = "none"; // Hide balloons

    shuffleQuestions(); // Shuffle questions for a new game
    resetPlanets(); // Reset planets state after shuffling
}

// Reset the planets' state after restarting the game
function resetPlanets() {
    planets.forEach((planet, index) => {
        planet.innerHTML = "?"; // Reset the planet text to the question mark
        planet.style.opacity = "0.5"; // Lock the planets again
        planet.style.cursor = "not-allowed"; // Disable clicking
    });
}

// Call shuffle and start the game when the page loads
shuffleQuestions();
