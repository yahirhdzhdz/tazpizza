$(document).ready(function() {

    onClick();
});

function onClick() {
    $('#enviar').click(obtenerTexto);
}

function obtenerTexto() {
    var nombre = $('.nombre').val();
    var apellidos = $('.apellidos').val();
    var curp = $('.curp').val();
    var rfc = $('.rfc').val();
    var domicilio = $('.domicilio').val();
    var telefono = $('.telefono').val();
    var email = $('.correo').val();
    var cuenta = $('.cuenta').val();
    var nombreEncriptado = operation(nombre);
    var apellidosEncriptado = operation(apellidos);
    var curpEncriptado = operation(curp);
    var rfcEncriptado = operation(rfc);
    var domicilioEncriptado = operation(domicilio);
    var telefonoEncriptado = operation(telefono);
    var emailEncriptado = operation(email);
    var cuentaEncriptado = operation(cuenta);
    guardar(nombreEncriptado, apellidosEncriptado, curpEncriptado, rfcEncriptado, domicilioEncriptado, telefonoEncriptado, emailEncriptado, cuentaEncriptado);
}

function guardar(nombreEncriptado, apellidosEncriptado, curpEncriptado, rfcEncriptado, domicilioEncriptado, telefonoEncriptado, emailEncriptado, cuentaEncriptado) {
    var parametros = { "nombre": nombreEncriptado, "apellidos": apellidosEncriptado, "curp": curpEncriptado, "rfc": rfcEncriptado, "domicilio": domicilioEncriptado, "telefono": telefonoEncriptado, "email": emailEncriptado, "cuenta": cuentaEncriptado };
    alert("antes que el ajax");
    $.ajax({
        type: "POST",
        url: "Php/guardar.php",
        data: parametros
    }).done(function(data) {
        //alert("datos inserttados correctamente");
        alert(data);
    }).fail(function(data) {
        alert("error");
    });
}

function operation(texto) {
    var matrizEncriptado = new Array(4);
    var matrizDesencriptado = new Array(4);
    var encriptado = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "@", ",", ".");
    var desencriptado = new Array("a", "e", "i", "m", "p", "t", "x", ",", "3", "7", "b", "f", "j", "n", "q", "u", "y", ".", "4", "8", "c", "g", "k", "ñ", "r", "v", "z", "1", "5", "0", "d", "h", "l", "o", "s", "w", "@", "2", "6", "0");
    var auxiliar = 0;
    for (i = 0; i < 4; i++) {
        matrizEncriptado[i] = new Array(10);
        matrizDesencriptado[i] = new Array(10);
    }
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 10; j++) {
            matrizEncriptado[i][j] = encriptado[auxiliar];
            matrizDesencriptado[i][j] = desencriptado[auxiliar];
            auxiliar++;
        }
    }
    var textoSeparado = new Array();
    textoSeparado = texto.split(" ");
    var textoNuevo = "";
    for (i = 0; i < textoSeparado.length; i++) {
        for (j = 0; j < textoSeparado[i].length; j++) {
            var letra = textoSeparado[i].substring(j, j + 1);
            var posicion = obtenerPosicion(letra, matrizDesencriptado);
            textoNuevo += encriptarLetra(posicion, matrizEncriptado);
        }
        textoNuevo += " ";
    }
    return textoNuevo;
}

function obtenerPosicion(letra, matrizDesencriptado) {
    var posiciones = new Array();
    for (k = 0; k < 4; k++) {
        for (l = 0; l < 10; l++) {
            if (matrizDesencriptado[k][l] == letra) {
                posiciones[0] = k;
                posiciones[1] = l;
            }
        }
    }
    return posiciones;
}

function encriptarLetra(posiciones, matrizEncriptado) {
    return matrizEncriptado[posiciones[0]][posiciones[1]];
}