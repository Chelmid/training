var reponse = document.querySelector('.repPC');
var win = document.querySelector('.winner');
var testpierre = document.querySelector('.pierre').value;
var testciseau = document.querySelector('.ciseau').value;
var testfeuille = document.querySelector('.feuille').value;
console.log(testpierre,testciseau,testfeuille)

var rdnb = Math.floor(Math.random() * 3) + 1
console.log(rdnb)


/*function compare(){

	if(rdnb == 2){
		reponse.innerHTML = 'ciseau'
		var ciseau = 'ciseau'
	}else{
		if (rdnb == 1){
			reponse.innerHTML = 'pierre'
			var pierre = 'pierre'
		}else{
			reponse.innerHTML = 'feuille'
			var feuille = 'feuille'
		}
	}
	if(testciseau == ciseau || testpierre == pierre || testfeuille == feuille){
			win.innerHTML = 'vous avez gagné'
	}else{
		win.innerHTML = 'vous avez perdu'
	}
}*/


function ciseau(){

	var ciso = 2;;

	if(rdnb == 2){
		reponse.innerHTML = 'ciseau'
	}else{
		if (rdnb == 1){
			reponse.innerHTML = 'pierre'
		}else{
			reponse.innerHTML = 'feuille'
		}
	}
	if(ciso == rdnb){
		win.innerHTML = 'égalité'
	}else if(ciso > rdnb){
		win.innerHTML = 'perdu' 
	}else{
		win.innerHTML = 'gagné'
	}
}

function pierre(){

	var rock = 2;

	if(rdnb == 2){
		reponse.innerHTML = 'pierre'
	}else{
		if (rdnb == 1){
			reponse.innerHTML = 'feuille'
		}else{
			reponse.innerHTML = 'ciseau'
		}
	}
	if(rock == rdnb){
		win.innerHTML = 'égalité'
	}else if(rock > rdnb){
		win.innerHTML = 'perdu' 
	}else{
		win.innerHTML = 'gagné'
	}
}

function feuille(){

	var papier = 2;;

	if(rdnb == 2){
		reponse.innerHTML = 'feuille'
	}else{
		if (rdnb == 1){
			reponse.innerHTML = 'ciseau'
		}else{
			reponse.innerHTML = 'pierre'
		}
	}
	if(papier == rdnb){
		win.innerHTML = 'égalité'
	}else if(papier > rdnb){
		win.innerHTML = 'perdu' 
	}else{
		win.innerHTML = 'gagné'
	}
}