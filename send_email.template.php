<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email   = $_POST['Email'] ?? '';
    $project = $_POST['ProjectName'] ?? '';
    $message = $_POST['Message'] ?? '';

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    $emailSafe   = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $projectSafe = htmlspecialchars($project, ENT_QUOTES, 'UTF-8');
    $messageSafe = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

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
            <strong>Email:</strong> $emailSafe<br>
            <strong>Interest:</strong> $projectSafe<br>
            <strong>Message:</strong><br>
            <pre style='font-family: monospace;'>$messageSafe</pre>
        ";

        $mail->send();
        echo "success";
    } catch (Exception $e) {
        error_log('Email send failed: ' . $mail->ErrorInfo);
        echo "Message could not be sent.";
    }
}
?>
