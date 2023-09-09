<?php
include('dbcon.php');
error_reporting(0);
$prevjobs = $_POST['data'][0];
$flag = $_POST['data'][1];//true means desc
$prevjobsnew = array();
foreach ($prevjobs as $val) {
    $prevjobsnew[] = json_encode($val);
}

if ($flag == 'true' ) {
    $query = "select * from jobs order by salary asc";
}
elseif($flag == 'false' ){
    $query = "select * from jobs order by salary desc";
}

$result = mysqli_query($conn, $query); 
while ( $row = mysqli_fetch_array($result, MYSQLI_ASSOC) ){
    $res[] = json_encode($row);
    //json encode convert each row to string for sorting duplicates simply
}

// remove duplicate rows
$res = array_unique($res);

//each index of res array is diffrent jobs.
//each index of res have keys-vals are name, email, pass, mobile, or id.
$newres = array();
foreach($res as $val){
    if(in_array($val, $prevjobsnew)){
    $newres[]=json_decode($val);}
    //revert back each row string to array
}
echo json_encode($newres, JSON_PRETTY_PRINT);
?>