<?php
    $host="localhost";
    $user="tesla";
    $pass="NikolaTesla1865";
    $db="dbtazpizza";
    $connect= new mysqli($host,$user,$pass,$db);
    if($connect->connect_errno)
        die("error to connecion".$connect->connect_error);
?>