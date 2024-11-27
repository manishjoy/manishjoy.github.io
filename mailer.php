<?php
require 'vendor/autoload.php';

$email = new \SendGrid\Mail\Mail();
$email->setFrom("enquiry@manishjoy.com", "Example User");
$email->setSubject("Sending with Twilio SendGrid is Fun");
$email->addTo("manishjoy.mj@gmail.com");
$email->addContent("text/plain", "and easy to do anywhere, even with PHP Testtt");
$email->addContent(
    "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
);
$sendgrid = new \SendGrid('API_KEY_PLACEHOLDER');
try {
    $response = $sendgrid->send($email);
    if ($response->statusCode() == 202) {
        echo 'Thank You! Your message has been sent.';
    } else {
        /* echo "<pre>";
        print $response->statusCode() . "\n";
        print_r($response->headers());
        print $response->body() . "\n"; */
        // echo 'Error sending email: ' . $response->body();
        echo 'Something went wrong. Please mail directly to manishjoy.mj@gmail.com';
    }
    
} catch (Exception $e) {
    echo 'Something went wrong. Please mail directly to manishjoy.mj@gmail.com';
    // echo 'Caught exception: '. $e->getMessage() ."\n";
}

echo "Thank You! Your message has been sent.";
?>