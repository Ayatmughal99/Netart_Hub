* {
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full height */
    background-color: #f0f0f0; /* Initial background color */
    transition: background-color 0.5s ease; /* Smooth transition for background color */
    margin: 0;
    font-family: 'Roboto', sans-serif;
}

.container {
    text-align: center;
    max-width: 600px;
    width: 100%;
}

.title {
    font-size: 2.5em;
    color: #333;
}

.description {
    font-size: 1.2em;
    margin-bottom: 20px;
}

.character {
    font-size: 100px;
    margin: 20px;
    transition: transform 0.5s ease, color 0.5s ease; /* Smooth transitions for transformations */
    display: inline-block;
}

.button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.btn {
    padding: 15px 30px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #4CAF50; /* Green */
    color: white;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn:hover {
    background-color: #45a049; /* Darker green */
    transform: scale(1.05); /* Scale effect on hover */
}

/* Responsive Styles */
@media (max-width: 768px) {
    .title {
        font-size: 2em;
    }

    .description {
        font-size: 1em;
    }

    .character {
        font-size: 80px;
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 1.5em;
    }

    .description {
        font-size: 0.9em;
    }

    .character {
        font-size: 60px;
    }

    body {
        padding: 10px;
    }
}
