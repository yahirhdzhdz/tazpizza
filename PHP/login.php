<?php
    include('connection.php');
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    if(!$consult=mysqli_query($connect,"call spStartSession('$user','$pass');"))
        echo("consult error");
    else
    {
        if(mysqli_num_rows($consult)>0)
        {
            $row= mysqli_fetch_array($consult);
            if(crypt($pass,$row['vchPass'])==$row['vchPass'])
            {
                echo("session correcta: ".$row['vchTypeUser']);
            }
        }
        else{
            echo("usuario o contraseñas incorrectas");
        }
    }
?>