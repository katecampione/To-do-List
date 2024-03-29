//check off specific todos by lcicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});
//click on x to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
   if(event.which === 13){
     //grab new todo text from input
     var todoText = $(this).val();
     $(this).val("");
     //create new li and add to ul
     $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
   }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
