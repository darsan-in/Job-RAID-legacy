<?php
$target_dir = "../uploads/userdp/";
$email = $_POST['email'];
$target_file = $target_dir . $email.".jpeg";
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Allow certain file formats
if($imageFileType != "jpeg") {
  echo "<script>alert('Sorry, jpeg only allowed');history.back();</script>";
  die();
}
if (move_uploaded_file($_FILES["dppic"]["tmp_name"], $target_file)) {
  echo "<script>alert('The file ". htmlspecialchars( basename( $_FILES["dppic"]["name"])). " has been uploaded and update take some time!');history.back();</script>";
  }else {
    echo "<script>alert('Sorry, there was an error uploading your file');history.back();</script>";
  }
?>