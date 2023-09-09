<?php
include('dbcon.php');
error_reporting(0);
$DATA = json_decode($_POST['data']);

$prevjobs = json_decode($DATA[6]);
$prevjobsnew = array();

$fskills = json_decode($DATA[0]);
$fqual = json_decode($DATA[1]);
$fsal = json_decode($DATA[2]);
$fexp = json_decode($DATA[3]);
$floc = json_decode($DATA[4]);
$fwmode = json_decode($DATA[5]);

/* echo gettype($fskills);
echo gettype($fwmode); */
/* echo "Skills - ".count($fskills)." //Qual - ".count($fqual)." //salary - ".count($fsal)."//Exp - ".count($fexp)." //location - ".count($floc)."//workmode - ".count($fwmode);
echo "Skills - ".$fskills." //Qual - ".$fqual." //salary - ".$fsal."//Exp - ".$fexp." //location - ".$floc."//workmode - ".$fwmode; */
foreach($prevjobs as $val){
    $prevjobsnew[]=json_encode($val);
}

$res = array();
function execute_query(string $qry, string $for){
    global $res,$conn;
    /* echo "$for - $qry"; */
    $result = mysqli_query($conn, $qry);
    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $res[] = json_encode($row);}
        //json encode convert each row to string for sorting duplicates simply
}

if (count($fskills) > 0 or 
    count($fqual) > 0 or 
    count($fsal) > 0 or 
    count($fexp) > 0 or 
    count($floc) > 0 or 
    count($fwmode) > 0){
    
    //skill filter applying
    if (count($fskills) > 0) {  
        //skills filter query on skills
        $query = "select * from jobs where skills regexp '$fskills[0]'";
        $count = count($fskills);
        for ($i = 1; $i < $count; $i++) {
            $query .= " or skills regexp '".$fskills[$i]."'";
        }
        execute_query($query,'Skill 1');

        //skills filter query on title
        $query = "select * from jobs where title regexp '$fskills[0]'";
        $count = count($fskills);
        for ($i = 1; $i < $count; $i++) {
            $query .= " or title regexp '".$fskills[$i]."'";
        }
        execute_query($query,'Skill 2');
    }

    //qualification filter query
    if (count($fqual) > 0) {
        $query = "select * from jobs where min_degree regexp '$fqual[0]'";
        $count = count($fqual);
        for ($i = 1; $i < $count; $i++) {
            $query .= " or min_degree regexp '".$fqual[$i]."'";
        }
        execute_query($query,'Qualification');

    }
    
    //salary filter query
    if (count($fsal) > 0) {
        $count = count($fsal);
        if($count == 1){
            if($fsal[0] >= 700000){
                $query = "select * from jobs where salary >= $fsal[0]";
            }else{
                $hr = $fsal[0] + 100000;
                $query = "select * from jobs where salary between $fsal[0] and $hr";
            }
            execute_query($query,'Salary');
        }
        else{
            for ($i = 0; $i < $count; $i++) {
                if($fsal[$i] >= 700000){
                    $query = "select * from jobs where salary >= $fsal[$i]";
                    execute_query($query,'Salary');
                }else{
                    $hr = $fsal[$i] + 100000;
                    $query = "select * from jobs where salary between $fsal[$i] and $hr";
                    execute_query($query,'Salary');
                }
            }
        }
    }
    
    //experience filter query
    if (count($fexp) > 0) {
        if(count($fexp) == 1 ){
            if($fexp[0] == 7){
                $query = "select * from jobs where min_exp >= $fexp[0]";
            }else{
                $hr = $fexp[0] + 1;
                $query = "select * from jobs where min_exp between $fexp[0] and $hr";
            }
            execute_query($query,"Exp");
        }else{
            $count = count($fexp);
            for ($i = 0; $i < $count; $i++) {
                if($fexp[$i] == 7){
                    $query = "select * from jobs where min_exp >= $fexp[$i]";
                    execute_query($query,"Exp");
                }
                else{
                    $hr = $fexp[$i] + 1;
                    $query = "select * from jobs where min_exp between $fexp[$i] and $hr";
                    execute_query($query,"Exp");
                }
            }
        }
    }


    //location filter query
    if (count($floc) > 0) {
        $query = "select * from jobs where location regexp '$floc[0]'";
        $count = count($floc);
        for ($i = 1; $i < $count; $i++) {
            $query .= " or location regexp '".$floc[$i]."'";
        }
        execute_query($query,"Location");
    }

    
    //workmode filter query
    if (count($fwmode) > 0) {
        $query = "select * from jobs where work_mode regexp '$fwmode[0]'";
        $count = count($fwmode);
        for ($i = 1; $i < $count; $i++) {
            $query .= " or work_mode regexp '$fwmode[$i]'";
        }
        execute_query($query,"WMode");
    }

    /* echo "Result with dup len is ".count($res); */
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
    /* echo "Job count WO dup is ".count($newres); */

} else {
    echo json_encode($prevjobs);
    /* echo "Filter not applied"; */
}
?>