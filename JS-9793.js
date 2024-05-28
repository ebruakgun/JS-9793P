document.addEventListener('DOMContentLoaded', (event) => {
    // Select the elements
    const numberElement = document.getElementById('number');
    const buttonElement = document.getElementById('incrementButton');

    // Initialize the number
    let number = parseInt(numberElement.textContent);

    // Add click event listener to the button
    buttonElement.addEventListener('click', () => {
        // Increment the number
        number++;
        // Update the number in the paragraph
        numberElement.textContent = number;
    });
});

