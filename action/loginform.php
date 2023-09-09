<?php      
include('dbcon.php');
error_reporting(0);
$email = $_POST['email'];  
$password = $_POST['pass'];  

//to prevent from mysqli injection  
$email = stripcslashes($email);  
$password = stripcslashes($password);  
$email = mysqli_real_escape_string($conn, $email);  
$password = mysqli_real_escape_string($conn, $password);  

$sql = "select * from users where email = '$email' and pass = '$password'";  
$result = mysqli_query($conn, $sql);  
$count = mysqli_num_rows($result);
$setval = "<script type='text/JavaScript'>window.localStorage.removeItem('umail');window.localStorage.setItem('umail','$email');window.location.assign('../search.html')</script>";
if($count == 1){  
    echo $setval;
    die();
}  
else{  
    echo "<script>alert('Invalid username or password');history.back();</script>";  
}     
?>  