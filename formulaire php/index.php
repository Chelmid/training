<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>formulaire</title>
</head>
<body>
	<form method="POST" action="index.php">
		<input type="text" name="nom" placeholder="Nom...">
		<?php echo verifchamps('nom'); ?>
		<input type="text" name="prenom" placeholder="Prenom...">
		<?php echo verifchamps('prenom'); ?>
		<input type="text" name="email" placeholder="Email...">
		<?php echo verifchamps('email'); ?>
		<input type="text" name="telephone" placeholder="Téléphone">
		<?php echo verifchamps('telephone'); ?>
		<input type="text" name="date de naissance" placeholder="../../....">
		<?php echo verifchamps('date de naissance'); ?>
		<input type="text" name="question" placeholder="Quelle est votre nom?">
		<?php echo verifchamps('question'); ?>
		
		<?php
			function verifchamps($namechamps){
				$resultat = '';
				if (!isset($_POST[$namechamps]) OR strlen($_POST[$namechamps]) == 0 ){
					echo 'champs vide';
					$resultat = false;
					return $resultat;
				}else{
					echo 'ok';
					if(isset($_POST[$namechamps]) AND strlen($_POST[$namechamps]) < 4 OR strlen($_POST[$namechamps]) > 8){
						echo 'le nom est trop court ou trop long';
						$resultat = false;
					}else{
						echo 'c est bon';
						$resultat = true;
					}
				}
			}
		?>

		<input type="submit" name="valider" value='envoyer'>
	</form>
</body>
</html>