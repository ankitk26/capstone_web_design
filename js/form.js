function validate(){
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var dob = document.getElementById("dob").value;
	var contact = document.getElementById("contact").value;
	var dp = document.getElementById("dp").value;
	var add = document.getElementById("add").value;
	var error=0;
	if (fname == "" || lname == "" || email == "" || dob == "" || contact == "" || dp == "" || add == ""){
		alert("Please complete the form");
		error=1;
	}
	if (contact.length < 10 && contact.length > 0){
		alert("Please enter valid contact");
		error=1;
	}
	if (email.indexOf("@") < 0){
		alert("Please enter valid email");
		error=1;
	}
	if (error=0){
		alert("Thank you " + fname + " " + lname + " for joining our Library. Verification code is sent to your mail " + email);
		return true;
	}
	else
		return false;
}