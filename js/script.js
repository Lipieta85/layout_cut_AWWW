$(function(){
    $("a").click(function(evt){
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = link;
        }, 500);
    });
});


$('input').focus(function () {
    $(this).parents('.form-group').addClass('focused');
    
});

$('input').blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');
    } else {
        $(this).addClass('filled');
    }

})

function validateForm(selector_id) {
    var x = document.getElementById(selector_id).value;
    
    if (x.length < 3) {
        document.getElementById(selector_id).style.boxShadow = "0 1px 0 0 red";
    } else {
        document.getElementById(selector_id).style.boxShadow = "0 1px 0 0 green";
    }
}

function validateNumber(selector_id) {
    var y = document.getElementById(selector_id).value;
    
    if (y.length < 8) {
        document.getElementById(selector_id).style.boxShadow = "0 1px 0 0 red";
    } else {
        document.getElementById(selector_id).style.boxShadow = "0 1px 0 0 green";
    }
}

function validateEmail(selector_id) {
    var x = document.getElementById(selector_id).value;

    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length ) {
        document.getElementById(selector_id).style.boxShadow = "0 1px 0 0 red";
    } else {
        document.getElementById(selector_id).style.boxShadow = "0 1px 0 0 blue";
    }
}






