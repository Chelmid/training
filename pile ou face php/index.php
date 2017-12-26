<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" >
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form method="POST" action="index.php">
    
    <input type="radio" id="Choice1"  name="chance" value="Pile" checked="checked" >Pile
    <label for="Choice1"></label>

    <input type="radio" id="Choice2" name="chance" value="Face">Face
    <label for="Choice2"></label>
    
    <br>
    
    	<?php
			if(isset($_POST['lancer'])){
				if(rand(1,2) > 1){
					var_dump($_POST['chance']);
					var_dump(mt_rand(1,2));
					echo 'Pile';
					$valeur = "Pile";
				}else{
					var_dump($_POST['chance']);
					var_dump(mt_rand(1,2));
					echo "Face";
					$valeur = 'Face';
				}

				if($_POST['chance'] == $valeur){
					echo 'vous avez gagné !';
				}else{
					echo'vous avez perdu !';
				}
			}

			

			
			/*var_dump($_POST['chance']);
			var_dump(rand(1,2));*/
		?>
	
	<br>
	
	<input type="submit" name="lancer" value="valider">
	
	</form>
</body>
</html>