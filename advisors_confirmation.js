$(document).ready(function(){
	var message = "<h3 class='mt-5 css-thanks'>Thanks, "+localStorage.getItem("firstname")+" "+localStorage.getItem("lastname")+"!"+"</h3>";
	$("#thankstag").append(message);
	var message = "<p class='css-thanks'>A representative will contact you within 3 business days at: "+localStorage.getItem("email")+" to provide assistance and support with the laptop(s) you are looking at.</p>";
	$("#thankstag").append(message);
  });