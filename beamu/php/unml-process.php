<?php

$email = $_POST["mlEmail"];
	
//SAVE DATA
$servername = "localhost";
$database = "beamu_mailing_list";
$username = "beamu_unsub_mail";
$password = "beamu@113113";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) { 
	die("Connection failed: " . mysqli_connect_error());
	echo "invalid";
}

$sql = "SELECT * FROM list WHERE email = '$email' ORDER BY email DESC";
if ($result = mysqli_query($conn, $sql)) {
	if(mysqli_num_rows($result) > 0){
		$sql2 = "DELETE FROM list WHERE email = '$email'";
		if (mysqli_query($conn, $sql2)) {
			echo "success";
		} else {
			echo "invalid";
		}
		
	} else {
		echo "no exist";
	}
	
} else {
	echo "invalid";
}

mysqli_close($conn);
?>