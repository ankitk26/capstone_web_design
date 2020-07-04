let form = document.getElementById("registerForm");
form.addEventListener('submit', validate);

function validate(e){
	e.preventDefault();
	
	let fname = document.getElementById("fname").value;
	let lname = document.getElementById("lname").value;
	let email = document.getElementById("email").value;
	let dob = document.getElementById("dob").value;
	let contact = document.getElementById("contact").value;
	let dp = document.getElementById("dp").value;
	let add = document.getElementById("add").value;

	if (fname == " " || lname == " " || email == " " || dob == " " || contact == " " || dp == " " || add == " " || email.indexOf('@')<0 || contact.length != 10){
		alert('Invalid submission');
	}
	else{
		alert("Thank you " + fname + " " + lname + " for joining Central Park Library. Verification code has been sent to the email " + email);
	}

}