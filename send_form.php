<?
$name= $_POST['name'];
$tel= $_POST['tel'];
$emailTo = 'zakaz@profilmet.ru';
$body = "$name \n\n$tel";
$headers = "Content-Type: text/plain; charset=utf-8\r\n".'From: MySite <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $emailTo;
mail($emailTo, $name, $body, $headers);
$emailSent = true;
?>