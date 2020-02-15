<?php

$email = $_POST["mlEmail"];
	
//SAVE DATA
$servername = "localhost";
$database = "beamu_mailing_list";
$username = "beamuio_mail";
$password = "beamu@113113";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) { 
	die("Connection failed: " . mysqli_connect_error());
	echo "invalid";
}

$sql = "SELECT * FROM list WHERE email = '$email' ORDER BY email DESC";
if ($result = mysqli_query($conn, $sql)) {
	if(mysqli_num_rows($result) > 0){
		echo "already exisit";
	}else{
		$sql2 = "INSERT INTO list (email) VALUES ('$email')";
		if (mysqli_query($conn, $sql2)) {
			echo "success";
		} else {
			echo "invalid";
		}
	}
	
} else {
	echo "invalid";
}

mysqli_close($conn);
?>