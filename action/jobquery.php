<?php
include('dbcon.php');
error_reporting(0);
//user query
$sqry = strtolower($_POST['qry']);
//divide query into array of phrases
$phrases = explode(" ",$sqry);
//number of phrases in query
$phrases_len = count($phrases);

//holding sql results
$res = array();

//query all phrases with regular expression on title
for ($index = 0; $index < $phrases_len;$index++){ 
$query = "select * from jobs where title regexp '$phrases[$index]'";  
$result = mysqli_query($conn, $query); 
while ( $row = mysqli_fetch_array($result, MYSQLI_ASSOC) ){
    $res[] = json_encode($row);
    //json encode convert each row to string for sorting duplicates simply
}
}

//query all phrases with regular expression on jd 
for ($index = 0; $index < $phrases_len;$index++){ 
    $query = "select * from jobs where jd regexp '$phrases[$index]'";  
    $result = mysqli_query($conn, $query); 
    while ( $row = mysqli_fetch_array($result, MYSQLI_ASSOC) ){
        $res[] = json_encode($row);
        //json encode convert each row to string for sorting duplicates simply
    }
    }

//query all phrases with regular expression on skills
for ($index = 0; $index < $phrases_len;$index++){ 
    $query = "select * from jobs where skills regexp '$phrases[$index]'";  
    $result = mysqli_query($conn, $query); 
    while ( $row = mysqli_fetch_array($result, MYSQLI_ASSOC) ){
        $res[] = json_encode($row);
        //json encode convert each row to string for sorting duplicates simply
    }
    }

// remove duplicate rows
$res = array_unique($res);

//each index of res array is diffrent jobs.
//each index of res have keys-vals are name, email, pass, mobile, and id.
$newres = array();
foreach($res as $val){
    $newres[]=json_decode($val);
    //revert back each row string to array
}

//setting localstorage varibale in browser
echo json_encode($newres,JSON_PRETTY_PRINT)
?>
