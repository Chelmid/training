const x = "X";
const o = "O";




//selection des joueurs

//var jouer = prompt("Veuillez choisir")

function choix(){
	var x = "X"
	var o = "O"

	if(jouer == x){
		return x
	}else{
		return o
	}
}


// Selector

var cases = document.querySelectorAll(".case");

// test verification
function verifier(){

		// condition pour le X
		if(true){
			if(cases[0].innerHTML == "X" && cases[1].innerHTML == "X" && cases[2].innerHTML == "X"){
					console.log(cases[0].innerHTML,cases[1].innerHTML,cases[2].innerHTML)
					alert(" X you win")
			}
			if(cases[3].innerHTML == "X" && cases[4].innerHTML == "X" && cases[5].innerHTML == "X"){
					console.log(cases[3].innerHTML,cases[4].innerHTML,cases[5].innerHTML)
					alert(" X you win")
			}
			if(cases[6].innerHTML == "X" && cases[7].innerHTML == "X" && cases[8].innerHTML == "X"){
					console.log(cases[6].innerHTML,cases[7].innerHTML,cases[8].innerHTML)
					alert(" X you win")
			}
			if(cases[0].innerHTML == "X" && cases[4].innerHTML == "X" && cases[8].innerHTML == "X"){
					console.log(cases[0].innerHTML,cases[4].innerHTML,cases[8].innerHTML)
					alert(" X you win")
			}
			if(cases[2].innerHTML == "X" && cases[4].innerHTML == "X" && cases[6].innerHTML == "X"){
					console.log(cases[2].innerHTML,cases[4].innerHTML,cases[6].innerHTML)
					alert(" X you win")
			}

		// condition pour le O
		if(true){
			if(cases[0].innerHTML == "O" && cases[1].innerHTML == "O" && cases[2].innerHTML == "O"){
					console.log(cases[0].innerHTML,cases[1].innerHTML,cases[2].innerHTML)
					alert(" O you win")
			}
			if(cases[3].innerHTML == "O" && cases[4].innerHTML == "O" && cases[5].innerHTML == "O"){
					console.log(cases[3].innerHTML,cases[4].innerHTML,cases[5].innerHTML)
					alert(" O you win")
			}
			if(cases[6].innerHTML == "O" && cases[7].innerHTML == "O" && cases[8].innerHTML == "O"){
					console.log(cases[6].innerHTML,cases[7].innerHTML,cases[8].innerHTML)
					alert(" O you win")
			}
			if(cases[0].innerHTML == "O" && cases[4].innerHTML == "O" && cases[8].innerHTML == "O"){
					console.log(cases[0].innerHTML,cases[4].innerHTML,cases[8].innerHTML)
					alert(" O you win")
			}
			if(cases[2].innerHTML == "O" && cases[4].innerHTML == "O" && cases[6].innerHTML == "O"){
					console.log(cases[3].innerHTML,cases[4].innerHTML,cases[6].innerHTML)
				alert(" O you win")
			}
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
	return t%2 ?"X" : "O";
}

// function pour l'affichage
function affichage(){
	if(this.innerHTML == false){
		this.innerHTML = tour()
	}
	cases.innerHTML = verifier()
	/*if((cases.innerHTML = verifier()) == true){
		cases.innerHTML = ""
	}*/
}