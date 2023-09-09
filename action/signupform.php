<?php
error_reporting(0);
include('dbcon.php');
$username = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];  
$password = $_POST['pass'];  

//to prevent from mysqli injection  
$username = stripcslashes($username);  
$password = stripcslashes($password);  
$username = mysqli_real_escape_string($conn, $username);  
$password = mysqli_real_escape_string($conn, $password);
$email = stripcslashes($email);  
$mobile = stripcslashes($mobile);  
$email = mysqli_real_escape_string($conn, $email);  
$mobile = mysqli_real_escape_string($conn, $mobile);  


$sql = "insert into users (name, email, pass, mobile) values('$username','$email','$password','$mobile')";  
$result = mysqli_query($conn, $sql);  
    
if($result){   
    header("Location: ../signup+.html");
    die();  
}  
else{  
    echo "<script>alert('failed');history.back();</script>";

}     
?>  