$(document).ready(function(){
	var message = "<h3 class='mt-5'>&emsp;&emsp;Thanks, "+localStorage.getItem("firstname")+" "+localStorage.getItem("lastname")+"!"+"</h3>";
	$("#thankstag").append(message);
	var message = "<p>&emsp;&emsp;&emsp;&emsp;&emsp;A representative will contact you within 3 business days at: "+localStorage.getItem("email")+" to provide assistance and support with the laptop(s) you are looking at.</p>";
	$("#thankstag").append(message);
  });