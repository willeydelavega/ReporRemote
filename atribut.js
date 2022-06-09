$(document).ready(function(){
 
    $("srcImg").text($("img").attr("src"))
 
    $("#paragraphe").text($("a").attr("href"));
 
  //  document.getElementById("button").addEventListener("click",function(){
    //  $("img").attr("src","C:/Users/Stagiaire/Desktop/jquery_logo.png")
    //  $("img").attr("alt","Jquery logo");
 // })
$("#bonjour").click(function(){
    $(this).css("color","blue");
    $(this).css("background-color","chocolate");
});

$("#bonjour").on({
    mouseenter: function(){
        $(this).css("font-size","200%");
},
    mouseleave: function(){
    $(this).css("border","5px solid red");
}
});

$("p").click(function(){
    alert($(this).text())

})

$("form").on("submit",false); 
});