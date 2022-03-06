/* Function for other fruit user wants to enter */
function displayOther() {
  var dropdown = document.getElementById("dropdown");
  var other = document.getElementById("other");
  var fruit = document.getElementById("fruit");

  if (dropdown.value == "other"){
    other.style.visibility = "visible";
    other.style.height = "auto";
  }else {
    other.style.visibility = "hidden";
    other.style.height = "0px";
    fruit.value = ""
  }
}

/* Function for user validation */
/*function val(value) {
  if (value.validity.valueMissing) {
    value.style.boxShadow = "0px 10px 10px rgba(255, 0, 0, 0.5), 0px -10px 10px rgba(255, 0, 0, 0.5), 10px 0px 10px rgba(255, 0, 0, 0.5), -10px 0px 10px rgba(255, 0, 0, 0.5)";
    value.setCustomValidity('You Have To Fill This Out!');
    } else if (value.validity.rangeUnderflow) {
    value.style.boxShadow = "0px 10px 10px rgba(255, 0, 0, 0.5), 0px -10px 10px rgba(255, 0, 0, 0.5), 10px 0px 10px rgba(255, 0, 0, 0.5), -10px 0px 10px rgba(255, 0, 0, 0.5)";
    value.setCustomValidity('You Are Under Aged!');
  } else if (value.validity.rangeOverflow) {
    value.style.boxShadow = "0px 10px 10px rgba(255, 0, 0, 0.5), 0px -10px 10px rgba(255, 0, 0, 0.5), 10px 0px 10px rgba(255, 0, 0, 0.5), -10px 0px 10px rgba(255, 0, 0, 0.5)";
    value.setCustomValidity('Your Age Is Too High!');
  } else if (value.validity.typeMismatch) {
  value.style.boxShadow = "0px 10px 10px rgba(255, 0, 0, 0.5), 0px -10px 10px rgba(255, 0, 0, 0.5), 10px 0px 10px rgba(255, 0, 0, 0.5), -10px 0px 10px rgba(255, 0, 0, 0.5)";
  value.setCustomValidity('Enter A Correct Email Address!');
 } else {
    value.setCustomValidity('');
    value.style.boxShadow = "";
  }
}*/

/* Function for user validation */
/*function val2(value) {
  var error = document.getElementById(value.id + "Error");

  if (value.validity.valueMissing) {
    value.style.boxShadow = "0px 10px 10px rgba(255, 0, 0, 0.5), 0px -10px 10px rgba(255, 0, 0, 0.5), 10px 0px 10px rgba(255, 0, 0, 0.5), -10px 0px 10px rgba(255, 0, 0, 0.5)";
    error.style.visibility = "visible";
    error.style.height = "auto";

    } else if (value.validity.rangeUnderflow) {
    value.style.boxShadow = "0px 10px 10px rgba(255, 0, 0, 0.5), 0px -10px 10px rgba(255, 0, 0, 0.5), 10px 0px 10px rgba(255, 0, 0, 0.5), -10px 0px 10px rgba(255, 0, 0, 0.5)";
    error.style.visibility = "visible";
    error.style.height = "auto";

  } else if (value.validity.rangeOverflow) {
    value.style.boxShadow = "0px 10px 10px rgba(255, 0, 0, 0.5), 0px -10px 10px rgba(255, 0, 0, 0.5), 10px 0px 10px rgba(255, 0, 0, 0.5), -10px 0px 10px rgba(255, 0, 0, 0.5)";
    error.style.visibility = "visible";
    error.style.height = "auto";

  } else if (value.validity.typeMismatch) {
  value.style.boxShadow = "0px 10px 10px rgba(255, 0, 0, 0.5), 0px -10px 10px rgba(255, 0, 0, 0.5), 10px 0px 10px rgba(255, 0, 0, 0.5), -10px 0px 10px rgba(255, 0, 0, 0.5)";
  error.style.visibility = "visible";
  error.style.height = "auto";

 } else {
    value.style.boxShadow = "";
    error.style.visibility = "hidden";
    error.style.height = "0px";
  }
}*/

/* Function for user validation */
function eRROR() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var age = document.getElementById("age");

  var nameDisplay = document.getElementById("nameError");
  var emailDisplay = document.getElementById("emailError");
  var ageDisplay = document.getElementById("ageError");

   if (name.validity.valid) {
     name.style.boxShadow = "";
     nameDisplay.style.visibility = "hidden";
     nameDisplay.style.height = "0px";
   }else{
     name.style.boxShadow = "0px 10px 10px rgba(255, 0, 0, 0.5), 0px -10px 10px rgba(255, 0, 0, 0.5), 10px 0px 10px rgba(255, 0, 0, 0.5), -10px 0px 10px rgba(255, 0, 0, 0.5)";
     nameDisplay.style.visibility = "visible";
     nameDisplay.style.height = "auto";
   }

   if  (email.validity.valid) {
     email.style.boxShadow = "";
     emailDisplay.style.visibility = "hidden";
     emailDisplay.style.height = "0px";
   }else{
     email.style.boxShadow = "0px 10px 10px rgba(255, 0, 0, 0.5), 0px -10px 10px rgba(255, 0, 0, 0.5), 10px 0px 10px rgba(255, 0, 0, 0.5), -10px 0px 10px rgba(255, 0, 0, 0.5)";
     emailDisplay.style.visibility = "visible";
     emailDisplay.style.height = "auto";
   }

   if  (age.validity.valid) {
     age.style.boxShadow = "";
     ageDisplay.style.visibility = "hidden";
     ageDisplay.style.height = "0px";
   }else{
     age.style.boxShadow = "0px 10px 10px rgba(255, 0, 0, 0.5), 0px -10px 10px rgba(255, 0, 0, 0.5), 10px 0px 10px rgba(255, 0, 0, 0.5), -10px 0px 10px rgba(255, 0, 0, 0.5)";
     ageDisplay.style.visibility = "visible";
     ageDisplay.style.height = "auto";
   }
}

/* Function for user validation */
function val3(value) {
  var error = document.getElementById(value.id + "Error");

  if  (value.validity.valid) {
    value.style.boxShadow = "";
    error.style.visibility = "hidden";
    error.style.height = "0px";
  }else{
    value.style.boxShadow = "0px 10px 10px rgba(255, 0, 0, 0.5), 0px -10px 10px rgba(255, 0, 0, 0.5), 10px 0px 10px rgba(255, 0, 0, 0.5), -10px 0px 10px rgba(255, 0, 0, 0.5)";
    error.style.visibility = "visible";
    error.style.height = "auto";
  }
}
