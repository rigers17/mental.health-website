const username = document.getElementById('username');
const email = document.getElementById('email');
var patt = /^(\w){3,}@(\w){2,}\.(\w){1,3}$/;


function submit(){
	document.getElementById("form").submit();
}

	function validateForm(){

		if(username.value === '') {
			setErrorFor(username, 'Wrong. Set the correct inputs!');
		}else{
			setSuccessFor(username);
		}
		if(email.value ==='') {
			setErrorFor(email, 'Wrong. Set the correct inputs!');
		} else {
			setSuccessFor(email);
		}
		if(!patt.test(email)){
			setErrorFor(email, 'Wrong. Set the correct inputs!');
		} else {
			setSuccessFor(email);

		}
    }
	
	function clear() {
		document.getElementById("form").reset();
	  }

	  function setErrorFor(input, message) {
		const formControl = input.parentElement;
		const small = formControl.querySelector('small');
		formControl.className = 'form-control error';
		small.innerText = message;
	}
	
	function setSuccessFor(input) {
		const formControl = input.parentElement;
		formControl.className = 'form-control success';
	}

	function reveal() {
		var reveals = document.querySelectorAll(".reveal");
	  
		for (var i = 0; i < reveals.length; i++) {
		  var windowHeight = window.innerHeight;
		  var elementTop = reveals[i].getBoundingClientRect().top;
		  var elementVisible = 150;
	  
		  if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		  } else {
			reveals[i].classList.remove("active");
		  }
		}
	  }
	  
	  window.addEventListener("scroll", reveal);