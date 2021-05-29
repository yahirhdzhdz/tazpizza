<?php
    include('connection.php');
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    $type=$_POST['type'];
    $salt= substr(base64_encode(openssl_random_pseudo_bytes('30')),0,22);
    $salt = strtr($salt,array('+'=>'.'));
    $hash= crypt($pass,'$2y$10$'.$salt);
    if(!$consult=mysqli_query($connect,"call spUser('insertNormal',0,'$user','$hash','$type',NULL);"))
        echo("don´t save data");
?>