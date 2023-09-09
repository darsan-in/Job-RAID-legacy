<?php
include('dbcon.php');
error_reporting(0);
$email = $_POST['data'][0];
$contact =$_POST['data'][1];
$query = "update users set mobile='$contact' where email='$email'";
$result = mysqli_query($conn, $query);
if ($result) {
    /* echo "Updated"; */
} else {
    /* echo "Failed"; */
}
?>