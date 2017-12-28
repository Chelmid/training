<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>plus ou moins</title>
</head>

<body>
	<form method="POST" action="index.php">
		<h3>Juste prix</h3>
		<p>Entre 1 à 10000</p>
		<input type="text" name="numero" class='numero' value='50'>
		<br>
			<p>
				<?php
				function verifchamps(){
					if(empty($_POST['numero'])){
						$_POST['numero'] = '';
					}else{
						$_POST['numero'];
					}
					return $_POST['numero'];
					var_dump($_POST['numero']);
				}
				/*function randomnb() {
					$nb = rand(1,100);
					return $nb;
					var_dump($nb);
				}*/
				function camparaison(){
					$nb = mt_rand(1,100);
					if (verifchamps() == $nb) {
						echo "win";
					}else{
						if (verifchamps() < $nb ) {
							echo "C'est plus grand";
							var_dump($nb);
							return $nb;
						}else{
							echo "C'est plus petit";
							var_dump($nb);
							return $nb;
						}
					}return $nb;
				}
				camparaison();

				?>
			</p>
		<br>
		<input type="submit" name="valider" value="Lancer" >
	</form>
</body>
</html>