export function form(){
    function handleDropdownChange(event) {
        const dropdown = event.target;
        const selectedIndex = dropdown.selectedIndex;
        const nextInput = getNextInput(selectedIndex);
      
        if (nextInput) {
          event.preventDefault(); // Prevent form submission
          nextInput.focus(); // Focus on the next input field
        }
      }
      
      function getNextInput(selectedIndex) {
        const inputs = document.querySelectorAll('input[type="text"]');
        const nextIndex = selectedIndex + 1;
      
        if (nextIndex < inputs.length) {
          return inputs[nextIndex];
        }
      
        return null; // Return null if there are no more input fields
      }
}