const x = "X";
const o = "O";




//selection des joueurs

var joueur1 = prompt("Veuillez choisir un symbole joueur 1")
var joueur2 = prompt("Veuillez choisir un symbole joueur 2")


// Selector

var cases = document.querySelectorAll(".case");

// test verification
function verifier(){

		// condition pour le X
		if(true){
			if(cases[0].innerHTML == joueur1 && cases[1].innerHTML == joueur1 && cases[2].innerHTML == joueur1){
					console.log(cases[0].innerHTML,cases[1].innerHTML,cases[2].innerHTML)
					alert(" joueur 1 avec les symboles "+ joueur1 +" win")
					reset()
			}
			if(cases[3].innerHTML == joueur1 && cases[4].innerHTML == joueur1 && cases[5].innerHTML == joueur1){
					console.log(cases[3].innerHTML,cases[4].innerHTML,cases[5].innerHTML)
					alert(" joueur 1 avec les symboles "+ joueur1 +" win")
					reset()
			}
			if(cases[6].innerHTML == joueur1 && cases[7].innerHTML == joueur1 && cases[8].innerHTML == joueur1){
					console.log(cases[6].innerHTML,cases[7].innerHTML,cases[8].innerHTML)
					alert(" joueur 1 avec les symboles "+ joueur1 +" win")
					reset()
			}
			if(cases[0].innerHTML == joueur1 && cases[4].innerHTML == joueur1 && cases[8].innerHTML == joueur1){
					console.log(cases[0].innerHTML,cases[4].innerHTML,cases[8].innerHTML)
					alert(" joueur 1 avec les symboles "+ joueur1 +" win")
					reset()
			}
			if(cases[2].innerHTML == joueur1 && cases[4].innerHTML == joueur1 && cases[6].innerHTML == joueur1){
					console.log(cases[2].innerHTML,cases[4].innerHTML,cases[6].innerHTML)
					alert(" joueur 1 avec les symboles "+ joueur1 +" win")
					reset()
			}

		// condition pour le O
			if(cases[0].innerHTML == joueur2 && cases[1].innerHTML == joueur2 && cases[2].innerHTML == joueur2){
					console.log(cases[0].innerHTML,cases[1].innerHTML,cases[2].innerHTML)
					alert(" joueur 1 avec les symboles "+ joueur2 +" win")
					reset()
			}
			if(cases[3].innerHTML == joueur2 && cases[4].innerHTML == joueur2 && cases[5].innerHTML == joueur2){
					console.log(cases[3].innerHTML,cases[4].innerHTML,cases[5].innerHTML)
					alert(" joueur 1 avec les symboles "+ joueur2 +" win")
					reset()
			}
			if(cases[6].innerHTML == joueur2 && cases[7].innerHTML == joueur2 && cases[8].innerHTML == joueur2){
					console.log(cases[6].innerHTML,cases[7].innerHTML,cases[8].innerHTML)
					alert(" joueur 1 avec les symboles "+ joueur2 +" win")
					reset()
			}
			if(cases[0].innerHTML == joueur2 && cases[4].innerHTML == joueur2 && cases[8].innerHTML == joueur2){
					console.log(cases[0].innerHTML,cases[4].innerHTML,cases[8].innerHTML)
					alert(" joueur 1 avec les symboles "+ joueur2 +" win")
					reset()
			}
			if(cases[2].innerHTML == joueur2 && cases[4].innerHTML == joueur2 && cases[6].innerHTML == joueur2){
					console.log(cases[3].innerHTML,cases[4].innerHTML,cases[6].innerHTML)
				alert(" joueur 1 avec les symboles "+ joueur2 +" win")
				reset()
			}
		}
}

// action click sur les cases
cases.forEach(element => element.addEventListener("click", affichage));
console.log(cases);

// tour par tour
var t = 0;
function tour(){
	t++;
	return t%2 ? joueur1 : joueur2 ;
}

// function pour l'affichage
function affichage(){
	if(!this.innerHTML){
			this.innerHTML = tour()
			cases.innerHTML = verifier()
		}
}

function reset(){
	cases.forEach(element => element.innerHTML = '')
	console.log(cases);
	}
