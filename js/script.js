import { carusel } from './carusel.js';
import {form} from './form.js'
import {scrollHeader} from './scrollHeader.js'

carusel();
scrollHeader()
 form()





const text = document.querySelector(".text");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
	)
	.join("");



    
