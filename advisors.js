$(document).ready(function(){
  $("#signUp").click(function(){
    var hold = $("#first").val();
    localStorage.setItem("firstname", hold);
    hold = $("#last").val();
    localStorage.setItem("lastname", hold);
    hold = $("#eadd").val();
    localStorage.setItem("email", hold);
    var url = "advisors_confirmation.html";
    $(location).attr('href',url);
  });
});