// Business Logic
var data = function(name){
  return name
}
var mail = function(mail){
  return mail
}
var textarea = function(textMessage){
  return textMessage
}
// Getting the data from the user..

$(document).ready(function(){
  $('form#data').submit(
    function(){
      var name = $('#controlInput1').val()
      var email = $("#controlInput2").val()
      var text = $("#controlTextarea").val()
      var myForm = $("#data")[0];

      var sucess = name + "  we have received your message. Thank you fro reaching out to us."

      if(!name || !email || !text){
        alert("Fill in all the spaces..");
        return false;
      }else{
        myForm.method = "post"
        myForm.action = "https://gmail.us20.list-manage.com/subscribe/post?u=fe129e2324fe84990f1ee557f&amp;id=bf5aa18ea0"
        alert(sucess)
        return true
      }
    })
})


//Userinter face
$(document).ready(function(){
    $( ".hover1" ).hover(function() {
        $(".txt1").toggle();
      });
      
    $( ".hover2" ).hover(function() {
        $(".txt2").toggle();
      });
      
    $( ".hover3" ).hover(function() {
        $(".txt3").toggle();
      });
      
    $( ".hover4" ).hover(function() {
        $(".txt4").toggle();
      });
      
    $( ".hover5" ).hover(function() {
        $(".txt5").toggle();
      });
      
    $( ".hover6" ).hover(function() {
        $(".txt6").toggle();
      });
      
    $( ".hover7" ).hover(function() {
        $(".txt7").toggle();
      });
      
    $( ".hover8" ).hover(function() {
        $(".txt8").toggle();
      });
      
});


$(document).ready(function(){
    $("#icon1").click(function(){
        $("#content1").toggle();
        $("#img1").toggle();
    })

    $("#icon2").click(function(){
        $("#content2").toggle();
        $("#img2").toggle();
    })

    $("#icon3").click(function(){
        $("#content3").toggle();
        $("#img3").toggle();
    })
})






















