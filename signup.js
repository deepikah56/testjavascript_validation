function validateEmail(emailField){
	var x = document.getElementById("tick2");
	if(emailField.value == '' || null){
	x.style.display = "none";
	document.getElementById("username-validationMessage").innerHTML = "Email is required";
	return false;
	}
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false) 
        {
			x.style.display = "none";
           document.getElementById("username-validationMessage").innerHTML = "Invalid email address";            
		   return false;
        }
		document.getElementById("username-validationMessage").innerHTML = "";
		x.style.display = "block";
        return true;

}
	function validateText(names){
	var x = document.getElementById("tick");
	if(names.value == '' || null){
	x.style.display = "none";
	document.getElementById("firstname-validationMessage").innerHTML = "first name is required";
	return false;
	}
		document.getElementById("firstname-validationMessage").innerHTML = "";
		x.style.display = "block";
        return true;

}
function validateLastText(names){
var x = document.getElementById("tick1");
	if(names.value == '' || null){
	x.style.display = "none";
	document.getElementById("lastname-validationMessage").innerHTML = "last name is required";
	return false;
	}
		document.getElementById("lastname-validationMessage").innerHTML = "";
		 
		
			x.style.display = "block";
		
        return true;

}
	function myFunction() {
	  var x = document.getElementById("pwd");
	  if (x.type === "password") {
	  document.getElementById("show").innerHTML = "Hide Password";
		x.type = "text";
	  } else {
	  document.getElementById("show").innerHTML = "Show Password";
		x.type = "password";
	  }
	}

	function validatePassword(pwd){
		if(pwd.value == '' || null)
		{
			document.getElementById("lowercase").checked = false;
			document.getElementById("uppercase").checked = false;
			document.getElementById("eight").checked = false;
			document.getElementById("symbol").checked = false;
			document.getElementById("password-validationMessage").innerHTML = "Password is required";
			return false;
		}
		var p = document.getElementById("pwd").value;
		if (p.length > 8) {
		document.getElementById("eight").checked = true;
		document.getElementById("password-validationMessage").innerHTML = "";
		 var radiocount = document.querySelectorAll('input[type="radio"]:checked').length;
			if(radiocount == 4){
				document.getElementById("viasubmit").disabled = false;
			}
		}
		if (p.search(/[A-Z]/)!=-1) 
		{
		   document.getElementById("uppercase").checked = true;
		   document.getElementById("password-validationMessage").innerHTML = "";
		   var radiocount = document.querySelectorAll('input[type="radio"]:checked').length;
			if(radiocount == 4){
				document.getElementById("viasubmit").disabled = false;
			}
		  
		}
		if (p.search(/[a-z]/)!=-1) 
		{
		   document.getElementById("lowercase").checked = true;
		   document.getElementById("password-validationMessage").innerHTML = "";
		   var radiocount = document.querySelectorAll('input[type="radio"]:checked').length;
			if(radiocount == 4){
				document.getElementById("viasubmit").disabled = false;
			}
		}
		if (p.search(/[0-9]/)!=-1) {
		   document.getElementById("symbol").checked = true;
		   document.getElementById("password-validationMessage").innerHTML = "";
		   var radiocount = document.querySelectorAll('input[type="radio"]:checked').length;
			if(radiocount == 4){
				document.getElementById("viasubmit").disabled = false;
			}
		}
    
		
	
		var radiocount = document.querySelectorAll('input[type="radio"]:checked').length;
		if(radiocount == 4){
			document.getElementById("viasubmit").disabled = false;
			document.getElementById("viasubmit").style.backgroundColor = "#ff7a59";
			document.getElementById("viasubmit").style.color = "white";
		}
		}
		
			function onSubmit(){
			alert("Registraion successfull");
			window.location.href = "login.html"
			
				}
			