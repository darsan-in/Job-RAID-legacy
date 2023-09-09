<?php
include('dbcon.php');

$email = $_POST['data'][0];
$skills = $_POST['data'][1];
$frameworks = $_POST['data'][2];
$degree = $_POST['data'][3];
$query = "update users set skills='$skills', updegree='$degree', frameworks='$frameworks' where email='$email'";
$result = mysqli_query($conn, $query);
if ($result) {
    echo "Updated";
} else {
    echo "Failed";
}
?>