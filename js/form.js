function validate(){
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var dob = document.getElementById("dob").value;
	var contact = document.getElementById("contact").value;
	var dp = document.getElementById("dp").value;
	var add = document.getElementById("add").value;
	if (fname == "" || lname == "" || email == "" || dob == "" || contact == "" || dp == "" || add == "" || email.indexOf("@") < 0 || contact.length<10){
		alert("Invalid submission");
	}
	else
		alert("Thank you " + fname + " " + lname + " for joining Central Park Library. Verification code has been sent to your email " + email);
}