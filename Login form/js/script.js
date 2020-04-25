$(".textbox input").focusout(function(){
  if($(this).val() == ""){
    $(this).siblings().removeClass("hidden");
    $(this).css("background","#554343");
  } else {
    $(this).siblings().removeClass("hidden");
    $(this).css("background","#484848");
  }
});

$(".textbox input").keyup(function(){
  var input = $(".textbox input");
  if(inputs[0].value != "" && inputs[1].value){
    $(".login-btn").attr("disabled",false);
    $(".login-btn").addClass("active");
  } else {
    $(".login-btn").attr("disabled",true);
    $(".login-btn").addClass("active");
  }
})
