<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'php/PHPMailer.php';
require 'php/SMTP.php';
require 'php/Exception.php';

// Instantiation and passing `true` enables exceptions
$mefile = $_POST['myfile'];
$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();  
    $mail->CharSet = "UTF-8";                                          // Send using SMTP
    $mail->Host       = 'smtp.beget.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'form@marketing-adviser.ru';                     // SMTP username
    $mail->Password   = 'Qaz123456';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    if (isset($_FILES['myfile']) &&
    $_FILES['myfile']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['myfile']['tmp_name'],
                         $_FILES['myfile']['name']);
}

    //Recipients
    $mail->setFrom('form@marketing-adviser.ru', 'Заявка с сайта');
    $mail->addAddress('cls63cupe@gmail.com', 'Joe User');
    // Content
    $mail->isHTML(true);   
    $mail->Subject = 'Заявка с сайта | Заполненный бриф';  
    $mail->Body    = "Заполненный бриф"; 

    $mail->send();
    echo '<script>
    location.href= "https://marketing-adviser.ru/";
  </script>';
} catch (Exception $e) {
    echo "Ошибка: {$mail->ErrorInfo}";
}