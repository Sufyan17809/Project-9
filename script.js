var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var otpError = document.getElementById("otp-error");
var emailError = document.getElementById("email-error");
var requirementError = document.getElementById("requirement-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;
}
function validatePhone() {
  var phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please.";
    return false;
  }
  phoneError.innerHTML =
    '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;
}
function validateOtp() {
  var otp = document.getElementById("otp").value;

  if (otp.length == 0) {
    otpError.innerHTML = "Otp is required";
    return false;
  }
  if (otp.length !== 6) {
    otpError.innerHTML = "Otp no should be 6 digits";
    return false;
  }
  if (!otp.match(/^[0-9]{6}$/)) {
    otpError.innerHTML = "Only digits please.";
    return false;
  }
  otpError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;
}
function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML =
    '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;
}
function validateRequirement() {
  var req = document.getElementById("requirement").value;

  if (req.length == 0) {
    requirementError.innerHTML = "Requirement needed";
    return false;
  }
  if (!req.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    requirementError.innerHTML = "Enter the requirement";
    return false;
  }
  requirementError.innerHTML =
    '<i class="fa fa-check-circle" aria-hidden="true"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateOtp() ||
    !validateEmail() ||
    !validateRequirement()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to Submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  } else {
    window.location.href = "submit.html";
    return false;
  }
}
