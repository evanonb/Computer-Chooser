$(document).ready(function(){
	//stores data to local storage and loads post page
  $("#signUp").click(function(){
	var hold = $("#first").val();
	localStorage.setItem("firstname", hold);
	hold = $("#last").val();
	localStorage.setItem("lastname", hold);
	hold = $("#eadd").val();
	localStorage.setItem("email", hold);
	var url = "posted.html";
    $(location).attr('href',url);
  });
});