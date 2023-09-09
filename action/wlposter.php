<?php
include('dbcon.php');
$email = $_POST['wl'][0];
$jobid = $_POST['wl'][1];
//echo $email;
//echo $jobid;

$query = "select * from users where email='$email'";  
$result = mysqli_query($conn, $query);
//echo "first qry passed"; 
while ( $row = mysqli_fetch_array($result, MYSQLI_ASSOC) ){
    $res[] = $row;
}
$new_wl = array();
if (strlen($res[0]['wishlist']) > 0) {
    $oldwl=json_decode($res[0]['wishlist']);
    $len = count($oldwl);
    for($i=0;$i<$len;$i++){
    $new_wl[] =$oldwl[$i] ;}
}
$new_wl[]=$jobid;
$new_wl = json_encode(array_unique($new_wl));
//echo $new_wl;
$query = "update users set wishlist='$new_wl' where email='$email'";  
$result = mysqli_query($conn, $query); 
if($result){
    /* echo "successfully updated"; */
} else {
    /* echo "failed"; */
}
?>