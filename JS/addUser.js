$(document).ready(function() {
    getValue();
});

function getValue() {
    $('.form-submit').click(getText);
}

function getText() {
    startSEssion($('#user').val(), $('#pass').val(), $('#type').val());
}

function startSEssion(user, pass, type) {
    var parameter = { "user": user, "pass": pass, "type": type };
    $.ajax({
        type: "POST",
        url: "PHP/addUser.php",
        data: parameter
    }).done(function(data) {
        alert(data);
    }).fail(function(data) {
        alert("error");
    })
}