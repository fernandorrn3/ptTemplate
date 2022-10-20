<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>
<?php


$servername = "localhost";
$username = "u369698192_form";
$password = "123456789";
$dbname = "u369698192_form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 




$nome= $_POST['nome'];
$email= $_POST['email'];
$assunto= $_POST['assunto'];

$comentario= $_POST['comentario'];



$sql = "INSERT INTO formulario (email, nome, assunto,comentario)
VALUES ('$nome', '$email', '$assunto','$comentario')";


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


/*include "class.smtp.php";
include "class.phpmailer.php";


$mail = new PHPMailer;

$mail->IsSMTP();

//configuração do gmail
$mail->Port = '465'; //porta usada pelo gmail.
$mail->Host = 'smtp.gmail.com'; 
$mail->IsHTML(true); 
$mail->Mailer = ''; 
$mail->SMTPSecure = 'ssl';

//configuração do usuário do gmail
$mail->SMTPAuth = true; 
$mail->Username = 'fernando.alcantara.oliveira@gmail.com'; // usuario gmail.   
$mail->Password = '25710156'; // senha do email.

$mail->SingleTo = true; 

// configuração do email a ver enviado.
$mail->setFrom= $nome; 
$mail->FromName = $nome; 

$mail->addAddress("fernando.alcantara.oliveira@gmail.com"); // email do destinatario.

$mail->Subject = $texto; 
$mail->Body = $comentario.$email;

if(!$mail->Send())
    echo "Erro ao enviar Email:" . $mail->ErrorInfo; */




?>
<body>
</body>
</html>