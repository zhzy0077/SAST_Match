/**
 * Created by goody on 7-28-028.
 */
$(function () {
    $('.submitBtn').on('click', function () {
        var passwd = $('input[id=password]').val();
        var repasswd = $('input[id=confirm_password]').val();
        if (passwd !== repasswd) {
            $('input[id=confirm_password]').addClass('invalid');
        } else {
            alert("1");
        }
    })
    function ajaxQue(queNum) {
        var url = window.location.href;
        var thisNum =  url.substring(url.indexOf("exam.html/"));
        var content = $('#textarea1').val();
        var csrf =$("input[name=_csrf]").val();
        $.ajax({
            url: url,
            data : {
                "num" : thisNum,
                "content":content
            },
            type: "POST",
            error: function() {alert('error');},
            success: function(data) {console.log(data);}//TODO redirect
        })
        
    }
})