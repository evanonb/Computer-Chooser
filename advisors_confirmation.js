$(document).ready(function(){
	
	var message = "<h3> Thanks, "+localStorage.getItem("firstname")+" "+localStorage.getItem("lastname")+"!"+"</h3>";
	//alert(message);
	$("#thankstag").append(message);
	var message = "<p> You will receive messages at: "+localStorage.getItem("email")+"</p>";
	$("#thankstag").append(message);
  });