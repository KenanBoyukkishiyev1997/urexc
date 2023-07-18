export function form(){
    function handleDropdownChange() {
        const dropdown = document.getElementById('dropdown');
const dropdownFirst = document.getElementById('dropdownFirst');
        dropdown.addEventListener('change', (e) => {
            [...e.target.children].forEach(element => {
                if (element.selected) e.target.classList.add('valid-option');
            });
            
        })

        dropdownFirst.addEventListener('change', (e) => {
            [...e.target.children].forEach(element => {
                if (element.selected) e.target.classList.add('valid-option');
            });
            
        })
    }
    handleDropdownChange()

    }






