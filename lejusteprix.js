let input, error, formulaire, coups, nombreChoisi;
let nombreAleatoire = Math.floor(1001 * Math.random());

// console.log(nombreAleatoire);

input		= document.querySelector('#prix');
error		= document.querySelector('small');
formulaire	= document.querySelector('#formulaire ');
coups 		= 0;
error.style.display = 'none';

function bravo(){
	let fin = document.querySelector('#instructions div');
	if (fin.classList == 'fini') {
		fin.classList.toggle('plus');
	} else {
		fin.classList.toggle('fini');
	}
}

function verifier(nb){
	let instruction = document.createElement('div');
	if (nb < nombreAleatoire) {
		instruction.textContent = "Coup n" + coups + ". C'est plus que " + nb +"!";
		instruction.className = ("instruction plus");
	} else if (nb > nombreAleatoire) {
		instruction.textContent = "Coup n" + coups + ". C'est moins que " + nb +"!";
		instruction.className = ("instruction moins");
	} else {
		instruction.textContent = "Coup n" + coups + ". C'est ça, félicitations !";
		instruction.className = ("instruction fini");
		document.querySelector('button').setAttribute("disabled", "true");
		input.disabled = true;
		setInterval(bravo, 500);
	}
	document.querySelector('#instructions').prepend(instruction);
}
 
input.addEventListener('keyup', () => {
	if (isNaN(input.value)){
		error.style.display = 'inline';
	} else {
		error.style.display = 'none';
	}
})

formulaire.addEventListener('submit', (e) => {
	e.preventDefault();
	if(isNaN(input.value) || input.value == '') {
		input.style.borderColor = 'red';
	} else {
		input.style.borderColor = 'green';
		coups++;
		nombreChoisi = input.value;
		input.value = "";
		verifier(nombreChoisi);
	};
});