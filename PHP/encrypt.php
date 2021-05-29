<?php
    //echo hash('md5', 'The quick brown fox jumped over the lazy dog.');
    //print_r(hash_algos());
    /*if(defined("CRYPT_BLOWFISH") && CRYPT_BLOWFISH) {
        echo "CRYPT_BLOWFISH esta disponible";
      }*/
    $salt= substr(base64_encode(openssl_random_pseudo_bytes('30')),0,22);
    $salt = strtr($salt,array('+'=>'.'));
    $hash= crypt("fullmetal",'$2y$10$'.$salt);
    echo("la contraseña encryptada  :".$hash);
    echo("      la contraseña desencriptada : ".crypt("sherlook",$hash));
      
?>