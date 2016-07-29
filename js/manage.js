/**
 * Created by goody on 7-29-029.
 */
$(function () {
    $('#addChoice').on('click', function () {
        $("#addQue").append("<div class='input-field col s12'> <input  type='text' class='validate sel''> <label for='sele1'>选项：</label> </div>");

    })
    $("#sumbitQue").on('click',function () {
        var arr = [];
        $('.sel').each(function (i){
            var choiceVal = $(this).val();
            arr.push(choiceVal);
        });
        $.ajax({
            url: "1.php",
            data : {
                "department" : $("select option:selected").val(),
                "question":$("textarea").val(),
                "choices":arr
            },
            type: "POST",
            error: function() {alert('error');},
            success: function(data) {console.log(data);}//TODO redirect
        })
    })
})

//{"question": "Hello World", "choices": ["Apple", "Banana","Grape"], "department": "计算机部"}