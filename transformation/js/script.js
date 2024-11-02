$(document).ready(function() {
    const colors = [
        '#FF0000', // Red
        '#FF7F00', // Orange
        '#FFFF00', // Yellow
        '#00FF00', // Green
        '#00FFFF', // Cyan
        '#0000FF', // Blue
        '#4B0082', // Indigo
        '#9400D3'  // Violet
    ];

    let currentIndex = 0; // To track the current color index

    // Change the body's background color and character color on button click
    $('.change-color').click(function() {
        if (currentIndex >= colors.length) {
            currentIndex = 0; // Reset to the first color after cycling through
        }
        
        $('body').css('background-color', colors[currentIndex]); // Change body background color
        $('#character').css('color', colors[currentIndex]); // Change character color
        $('#character').css('transform', 'scale(1.2)'); // Scale the character up
        setTimeout(() => {
            $('#character').css('transform', 'scale(1)'); // Scale the character back down
        }, 200); // Duration to scale up
        currentIndex++; // Move to the next color
    });

    // Reset the character and background to original state
    $('.reset').click(function() {
        $('body').css('background-color', '#f0f0f0'); // Reset background color
        $('#character').css('color', '#000'); // Reset character color
        currentIndex = 0; // Reset the index
    });
});
