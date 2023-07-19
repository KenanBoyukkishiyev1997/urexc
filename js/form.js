export function form() {
//   function handleDropdownChange() {
//     const dropdown = document.getElementById("dropdown");
//     const dropdownFirst = document.getElementById("dropdownFirst");
//     // dropdown.addEventListener("change", (e) => {
//     //   [...e.target.children].forEach((element) => {
//     //     if (element.selected) e.target.classList.add("valid-option");
//     //   });
//     // });

//     // dropdownFirst.addEventListener('change', (e) => {
//     //     [...e.target.children].forEach(element => {
//     //         if (element.selected) e.target.classList.add('valid-option');
//     //     });

//     // })
//   }
//   handleDropdownChange();

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
        label.style.color='black'

          label.textContent = option.textContent;
          inputHidden.value = option.getAttribute("data-value");
          isOpen = false;
          toggleOptionsList();


        });
      });
  
      function toggleOptionsList() {
        if (isOpen) {
          optionsList.style.display = "block";
        } else {
          optionsList.style.display = "none";
        }
      }
    });
  
    // Close the dropdown when clicking outside the custom select
    document.addEventListener("click", function(event) {
      customSelects.forEach(function(select) {
        const optionsList = select.querySelector(".options");
        optionsList.style.display = "none";
      });
    });
  });
  
}


