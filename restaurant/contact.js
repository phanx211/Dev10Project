function validateForm() {
  // Retrieve the 3 required form fields
  var x = document.forms["contactForm"]["name"].value;
  var y = document.forms["contactForm"]["email"].value;
  var z = document.forms["contactForm"]["phone"].value;

  // Check to make sure they're not all empty
  if (x != "") {
    if (y != "") {
      if (z != "") {
        alert("Valid info submitted");
        return false;
      }
    }
  }
  else {
    alert("Required fields not filled out");
  }
}
