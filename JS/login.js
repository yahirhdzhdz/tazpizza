$(document).ready(function() {
    xd();
});

function xd() {
    $('.form-submit').click(getText);
}

function getText() {
    startSEssion($('#user').val(), $('#pass').val());
}

function startSEssion(user, pass) {
    var parameter = { "user": user, "pass": pass };
    $.ajax({
        type: "POST",
        url: "PHP/login.php",
        data: parameter
    }).done(function(data) {
        alert(data);
    }).fail(function(data) {
        alert("error");
    })
}