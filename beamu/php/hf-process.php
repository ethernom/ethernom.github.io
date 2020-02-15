<?php
$name = $_POST["hfName"];
$email = $_POST["hfEmail"];
$password = $_POST["hfPassword"];
 
$EmailTo = "beamu.info@ethernom.com";
$Subject = "Message - using BeamU Website";
 
// prepare email body text
$Body = "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Password: ";
$Body .= $password;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>