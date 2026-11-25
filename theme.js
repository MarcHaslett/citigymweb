// Find the Dark Mode button in the HTML
const darkButton = document.getElementById('dark-toggle');

// Check if dark mode was saved previously - this is where local storage comes into play
if (localStorage.getItem('darkMode') === 'on') {

    // Apply the dark-mode CSS class
    document.body.classList.add('dark-mode');

    // Change the button text
    darkButton.textContent = 'Light Mode';
}

// When the button is clicked
darkButton.addEventListener('click', function () {

    // Add or remove the dark-mode class
    document.body.classList.toggle('dark-mode');

    // Check if dark mode is currently active
    if (document.body.classList.contains('dark-mode')) {

        localStorage.setItem('darkMode', 'on');

        // Button now switches back to light mode
        darkButton.textContent = 'Light Mode';

    } else {

        localStorage.setItem('darkMode', 'off');

        // Button now switches to dark mode
        darkButton.textContent = 'Dark Mode';
    }
});