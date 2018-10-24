function validateForm() {
  var x = document.forms["contactForm"]["name"].value;
  var y = document.forms["contactForm"]["email"].value;
  var z = document.forms["contactForm"]["phone"].value;
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
