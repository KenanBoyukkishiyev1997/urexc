export function form(){
    function handleInputKeyDown(event) {
        if (event.key === 'Enter') {
          const currentInput = event.target;
          const nextInput = getNextInput(currentInput);
      
          if (nextInput) {
            event.preventDefault(); // Prevent form submission
            nextInput.focus(); // Focus on the next input field
          }
        }
      }
      
      function getNextInput(currentInput) {
        const inputs = document.querySelectorAll('.contact__form-input');
        const currentIndex = Array.from(inputs).indexOf(currentInput);
        const nextIndex = currentIndex + 1;
      
        if (nextIndex < inputs.length) {
          return inputs[nextIndex];
        }
      
        return null; // Return null if there are no more input fields
      }
}