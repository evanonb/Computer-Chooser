$(document).ready(function(){
  $("#signUp").click(function(){
    var hold = $("#fname").val();
    localStorage.setItem("firstname", hold);
    hold = $("#lname").val();
    localStorage.setItem("lastname", hold);
    hold = $("#email").val();
    localStorage.setItem("email", hold);
    var url = "advisors_confirmation.html";
    $(location).attr('href',url);
  });
});