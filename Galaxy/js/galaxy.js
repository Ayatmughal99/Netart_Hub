// Challenge data
const challenges = {
  planet1: [
      { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
      { question: "Which planet is known as the Red Planet?", answer: "Mars" }
  ],
  planet2: [
      { question: "What planet is closest to the sun?", answer: "Mercury" },
      { question: "Which planet has the most moons?", answer: "Saturn" }
  ],
  planet3: [
      { question: "Which planet is known as the evening star?", answer: "Venus" },
      { question: "Which planet has the longest day?", answer: "Venus" }
  ]
};

// Start planet challenge
function startPlanet1() {
  startChallenge('planet1');
}

function startPlanet2() {
  startChallenge('planet2');
}

function startPlanet3() {
  startChallenge('planet3');
}

// Randomize the challenge for each planet
function randomizeChallenge(planet) {
  const challengesArray = challenges[planet];
  const randomChallenge = challengesArray[Math.floor(Math.random() * challengesArray.length)];
  return randomChallenge;
}

// Start challenge for each planet
function startChallenge(planet) {
  const challenge = randomizeChallenge(planet);

  document.getElementById('planet-container').style.display = 'none';
  document.getElementById('challenge-container').style.display = 'block';
  document.getElementById('planet-title').textContent = `Challenge on ${planet}`;
  document.getElementById('challenge-text').textContent = challenge.question;
  document.getElementById('answer').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').style.color = 'white';
  document.getElementById('feedback').style.fontSize = '1.2em';

  // Store the correct answer for validation
  document.getElementById('feedback').setAttribute('data-correct-answer', challenge.answer);
}

// Check answer
function checkAnswer() {
  const answer = document.getElementById('answer').value.trim();
  const planet = document.getElementById('planet-title').textContent.toLowerCase().replace('challenge on ', '');
  const correctAnswer = document.getElementById('feedback').getAttribute('data-correct-answer');

  if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      document.getElementById('feedback').textContent = `Correct! You may now proceed to the next planet.`;
      document.getElementById('feedback').style.color = 'green';
      setTimeout(() => {
          if (planet === 'planet1') {
              startPlanet2();
          } else if (planet === 'planet2') {
              startPlanet3();
          } else {
              finishGame();
          }
      }, 1500);
  } else {
      document.getElementById('feedback').textContent = `Wrong answer! Try again.`;
      document.getElementById('feedback').style.color = 'red';
  }
}

// Finish the game and show prize
function finishGame() {
  document.getElementById('challenge-container').style.display = 'none';
  document.getElementById('prize-container').style.display = 'block';
}

// Restart the game and show new challenges
function restartGame() {
  document.getElementById('prize-container').style.display = 'none';
  document.getElementById('planet-container').style.display = 'flex';
  document.getElementById('planet-1').onclick = startPlanet1;
  document.getElementById('planet-2').onclick = startPlanet2;
  document.getElementById('planet-3').onclick = startPlanet3;
  document.getElementById('planet-1').style.cursor = 'pointer';
  document.getElementById('planet-2').style.cursor = 'pointer';
  document.getElementById('planet-3').style.cursor = 'pointer';
}