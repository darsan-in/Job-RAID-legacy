<?php
$servername = "localhost";
$user = "id20294726_helian";
$password = "RAIDJob@2023";
$dbname = "id20294726_cjp_db";

// checking connection
$conn = new mysqli($servername, $user, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>