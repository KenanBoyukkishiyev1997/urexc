export function form() {
    document.addEventListener("DOMContentLoaded", function() {
      const customSelects = document.querySelectorAll(".custom-select");
      const customImg = document.querySelector('.heroForm__form-img');
      const contactmImg = document.querySelector('.contact__form-img');

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
            optionsList.classList.add("show");
            customImg.classList.add("show");
            contactmImg.classList.add("show");

            
          } else {
            optionsList.classList.remove("show"); // Remove the "show" class to hide the list
            customImg.classList.remove("show"); // Remove the "show" class to hide the list
            contactmImg.classList.remove("show");

          }

          

          // Toggle the "show" class on the label to apply the rotation effect
          label.classList.toggle("show", isOpen);
        }
      });
  
      // Close the dropdown when clicking outside the custom select
      document.addEventListener("click", function(event) {
        customSelects.forEach(function(select) {
          const optionsList = select.querySelector(".options");
          optionsList.classList.remove("show"); // Always hide the list when clicking outside
  
          const label = select.querySelector(".select-label");
          label.classList.remove("show"); // Remove the "show" class to revert the rotation effect
        });
      });
    });
  }