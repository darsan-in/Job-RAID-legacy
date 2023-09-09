<?php
$target_dir = "../uploads/cv/";
$email = $_POST['email'];
$target_file = $target_dir . $email."_cv.pdf";
$FileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Allow certain file formats
if($FileType != "pdf") {
  echo "<script>alert('Sorry, PDF only allowed');history.back();</script>";
  die();
}
if (move_uploaded_file($_FILES["resume"]["tmp_name"], $target_file)) {
    echo "<script>alert('The file ". htmlspecialchars( basename( $_FILES["resume"]["name"])). " has been uploaded');history.back();</script>";
  } else {
    echo "<script>alert('Sorry, there was an error uploading your file');history.back();</script>";
  }
?>