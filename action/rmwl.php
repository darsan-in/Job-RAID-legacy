<?php
include('dbcon.php');
error_reporting(0);
$email = $_POST['wl'][0];
$jobid = $_POST['wl'][1];

$query = "select wishlist from users where email='$email'";  
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$res[] = $row;
$wl=json_decode($res[0]['wishlist']);
$index = array_search($jobid, $wl);
/* echo "index is " . $index; */
unset($wl[$index]);
$wl=array_values($wl);
$new_wl = json_encode($wl);
//echo $new_wl;
$query = "update users set wishlist='$new_wl' where email='$email'";  
$result = mysqli_query($conn, $query); 
if($result){
    /* echo "successfully updated"; */
} else {
    /* echo "failed"; */
}
?>