<?php
include('dbcon.php');
$email = $_POST['email'];
$query = "select skills, frameworks, updegree, mobile from users where email='$email'";  
$result = mysqli_query($conn, $query); 
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
echo json_encode($row);
?>