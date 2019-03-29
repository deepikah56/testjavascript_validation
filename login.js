	function validateEmail(emailField){
		if(emailField.value == '' || null){
		document.getElementById("username-validationMessage").innerHTML = "Email is required";
		return false;
		}
	        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	        if (reg.test(emailField.value) == false) 
	        {
	           document.getElementById("username-validationMessage").innerHTML = "Invalid email address";            
			   return false;
	        }
			document.getElementById("username-validationMessage").innerHTML = "";
			
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
				document.getElementById("password-validationMessage").innerHTML = "Password is required";
				return false;
			}
			var password = document.getElementById("pwd").value;
				if(password.length>=6)
				{
					document.getElementById("password-validationMessage").innerHTML = "";
					document.getElementById("submit").disabled = false;
					return true;
				}
				else
				{
					document.getElementById("password-validationMessage").innerHTML = "Password should be 6 characters";
					return false;
				}
				}
				