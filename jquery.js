



    $(document).ready(function () {
        $('.outer-menu-item').hover(function () {
            $(this).find('.inner-menu').show();
        }, function () {
            $(this).find('.inner-menu').hide();
        });
    });


    $(document).ready(function () {
        $('.hyper').hover(function () {
            $(this).css({
                background: 'pink',
                color: 'white'
            });
        }, function () {
            $(this).css({
            background: '',
            color: ''
        });
    });
}); 

function func1(){
$(document).ready(function(){
    $('#activity').load("activitypage.html");
    //document.getElementById("activity").innerHTML='<object type="text/html" data="activitypage.html"></object>';
    })
}

//<script type="text/javascript">
//$(document).ready(function() {
//    $("#activity").load("./Users/마윤주/project/Homepage/build/activitypage.html");
//});
//</script>
