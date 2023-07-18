import { carusel } from './carusel.js';
import {niceSelect} from './nice-select2.js'
import {scrollHeader} from './scrollHeader.js'
carusel();
scrollHeader()
niceSelect()


let options = {searchable: true, placeholder: 'select', searchtext: 'search', selectedtext: 'geselecteerd'};
NiceSelect.bind(document.getElementById("seachable-select"), options);



const text = document.querySelector(".text");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
	)
	.join("");

