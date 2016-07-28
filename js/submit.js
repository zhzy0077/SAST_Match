/**
 * Created by goody on 7-28-028.
 */
$(function () {
    $('.submitBtn').on('click', function () {
        var passwd = $('input[id=password]').val();
        var repasswd = $('input[id=confirm_password]').val();
        if(passwd!==repasswd){
            $('input[id=confirm_password]').addClass('invalid');
        }else {
            alert("1");
        }

    })

})