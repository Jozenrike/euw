<?php

$email = $_POST['email'];
$asunto = $_POST['subject'];
$mensaje = "Nombre: " . $_POST['name'] . "\nEmail: " . $_POST['email'] . "\nSkype: " . $_POST['skype'] . "\nMensaje: " . $_POST['message'];
$headers = 'X-Mailer: PHP/'.phpversion()  . "From: " . $_POST['email'];


if (mail("euweloboost@outlook.com", $asunto, $mensaje, $headers)) {

	mail($email, "EUWELOBOOST.com: Consulta recibida", "Hola " . $_POST['name'] . ",\n\nHemos recibido su consulta, le responderemos en menos de 12h. \nPuede responder a este mensaje con cualquier duda, para más información y contacto directo puede agregarnos a Skype: euweloboost_1. \n\nUn saludo.", $headers);
	?>
	<script>
		alert('\u00A1Consulta enviada! \nEn los pr\u00F3ximos minutos recibir\u00E1s un email de confirmaci\u00F3n.');
		window.location.href='http://www.euweloboost.com';
	</script>
	<?php
}

//header ("Location: http://www.euweloboost.com");
?>