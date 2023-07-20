import { carusel } from './carusel.js';
import {form} from './form.js'
import {scrollHeader} from './scrollHeader.js'
import {imgHover} from './imgHover.js'
carusel();
scrollHeader()
 form()
 imgHover()




const text = document.querySelector(".text");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 12.5}deg)">${char}</span>`
	)
	.join("");



    
