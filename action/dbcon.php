<?php
$servername = "localhost";
$user = "u904769970_jobadmin";
$password = "Darsansm008#";
$dbname = "u904769970_jobraid_db";

// checking connection
$conn = new mysqli($servername, $user, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>