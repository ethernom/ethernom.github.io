<?php
$name = $_POST["cfName"];
$email = $_POST["cfEmail"];
$user_options = $_POST["cfOptions"];
$user_text = $_POST["cfCustomText"];
$user_message = $_POST["cfMessage"];

$servername = "localhost";
$database = "beamu_customization";
$username = "beamuio";
$password = "beamu@113113";

$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) { 
	die("Connection failed: " . mysqli_connect_error());
	echo "invalid";
}

$sql = "INSERT INTO submission (name, email, options, customtext, customimage, message) VALUES ('$name', '$email', '$user_options', '$user_text', '[No Custom Image]', '$user_message')";
if (mysqli_query($conn, $sql)) {
	echo "success";
} else {
	echo "invalid";
}
mysqli_close($conn);

$to = 'beamu.customization@ethernom.com';

$subject = 'Customization Submission (from: ' . $email. ')';
$headers = "From: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$message = '<html><body>';
$message .= '<h1>Customization Submission</h1>';
$message .= '<h3>Full Name: ' . $name .'</h3>';
$message .= '<h3>Email: ' . $email . '</h3>';
$message .= '<h3>' . $user_options . '</h3>';
$message .= '<h3>Custom Text: ' . $user_text . '</h3>';
$message .= '<h3>Custom Image: [No Custom Image]</h3>';
$message .= '<p>Message: '. $user_message .'</p>';
$message .= '</body></html>';
$success = mail($to, $subject, $message, $headers);

// redirect to success page
/*
if ($success){	
	echo "success";
}else{
	echo "invalid";
}
*/
?>