<?php
include('dbcon.php');
error_reporting(0);
$email = $_POST['email'];
$query = "select wishlist from users where email='$email'";  
$result = mysqli_query($conn, $query); 
while ( $row = mysqli_fetch_array($result, MYSQLI_ASSOC) ){
    $res[] = $row;
}
$wl=json_decode($res[0]['wishlist']);
$res = array();
for ($i = 0; $i < count($wl);$i++){ 
    $query = "select * from jobs where id='$wl[$i]'";  
    $result = mysqli_query($conn, $query); 
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    if ($row == null){ //avoid removed job's null result
        continue;
    }
    $res[] = $row;
}
echo json_encode($res);
?>