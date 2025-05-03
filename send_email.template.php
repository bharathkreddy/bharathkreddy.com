<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['Email'];
    $project = $_POST['ProjectName'];
    $message = $_POST['Message'];

    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = '{{SMTP_USER}}'; // replaced at deployment
        $mail->Password   = '{{SMTP_PASS}}'; // replaced at deployment
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // TLS would be STARTTLS
        $mail->Port       = 465;

        // Recipients
        $mail->setFrom('{{SMTP_USER}}', 'Website Contact Form');
        $mail->addAddress('{{SMTP_TO}}'); // replaced at deployment

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "
            <strong>Email:</strong> $email<br>
            <strong>Interest:</strong> $project<br>
            <strong>Message:</strong><br>
            <pre style='font-family: monospace;'>$message</pre>
        ";

        $mail->send();
        echo "success";
    } catch (Exception $e) {
        echo "Message could not be sent. Error: {$mail->ErrorInfo}";
    }
}
?>
