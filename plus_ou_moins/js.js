function affichage(){
var numero = document.querySelector('.numero').value;
document.querySelector('#resultat').innerHTML = comparaison()
}


function randomnombre(){
	var hasardnombre = Math.round(Math.random() * 10000) + 1 
	return hasardnombre
}
console.log(randomnombre())

function comparaison(){
	var inputnb = document.querySelector('.numero').value;
	console.log(inputnb)
	if(  inputnb == randomnombre() ){
		document.querySelector('#resultat').innerHTML = "Vous avez gagné!"
		
	}else{
		if(inputnb > randomnombre()){
			document.querySelector('#resultat').innerHTML = "C'est moins !"
		}else{
			document.querySelector('#resultat').innerHTML = "C'est plus !"
		}
	}
}