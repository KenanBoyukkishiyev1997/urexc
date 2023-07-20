export function form() {
    document.addEventListener("DOMContentLoaded", function() {
      const customSelects = document.querySelectorAll(".custom-select");
  
      customSelects.forEach(function(select) {
        const label = select.querySelector(".select-label");
        const optionsList = select.querySelector(".options");
        const inputHidden = select.querySelector("input[type='hidden']");
        let isOpen = false;
  
        select.addEventListener("click", function(event) {
          event.stopPropagation();
          isOpen = !isOpen;
          toggleOptionsList();
        });
  
        const options = optionsList.querySelectorAll("li");
  
        options.forEach(function(option) {
          option.addEventListener("click", function(event) {
            event.stopPropagation();
            label.style.color = 'black';
            label.textContent = option.textContent;
            inputHidden.value = option.getAttribute("data-value");
            isOpen = false;
            toggleOptionsList();
          });
        });
  
        function toggleOptionsList() {
          if (isOpen) {
            optionsList.classList.add("show"); // Add the "show" class to display the list
          } else {
            optionsList.classList.remove("show"); // Remove the "show" class to hide the list
          }
        }
      });
  
      // Close the dropdown when clicking outside the custom select
      document.addEventListener("click", function(event) {
        customSelects.forEach(function(select) {
          const optionsList = select.querySelector(".options");
          optionsList.classList.remove("show"); // Always hide the list when clicking outside
        });
      });
    });
  }
  