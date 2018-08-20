//Gurukiran D
$(document).ready(function(){
    var ele=$("#main");
    $("#first").css({"color":"green","font-size":"20px"});//css property
    $("#tog").click(guru);
    $("#adc").addClass("jcss").css({"color":"red"});
    ele.append("<p>guru</p>");
    $("body").keydown(keypres);
});

function guru()
{
    $("p:first").toggle();
}

function keypres()//keypress function
{
    $("#guru1").css({"color":"blue","font-weight":"600"});
}