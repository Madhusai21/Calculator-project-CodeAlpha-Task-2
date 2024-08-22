// Select all buttons
const buttons = document.querySelectorAll('.buttons button');
const resultDisplay = document.querySelector('.result');

// Initialize an empty string for the current input
let currentInput = '';

// Function to update the display
function updateDisplay(value) {
  resultDisplay.textContent = value;
}

// Function to handle button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === 'C') {
      // Clear the current input
      currentInput = '';
      updateDisplay('0');
    } else if (buttonText === '=') {
      // Evaluate the expression
      try {
        currentInput = eval(currentInput).toString();
        updateDisplay(currentInput);
      } catch (error) {
        updateDisplay('Error');
        currentInput = '';
      }
    } else if (buttonText === '←') {
      // Handle backspace
      currentInput = currentInput.slice(0, -1);
      updateDisplay(currentInput || '0');
    } else {
      // Append the button text to the current input
      currentInput += buttonText;
      updateDisplay(currentInput);
    }
  });
});
