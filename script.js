// Toggle class active
const burger = document.querySelector(".burger-bar");
const menu = document.querySelector(".Header");
burger.addEventListener("click", () =>
{
  burger.classList.toggle("active");
  Header.classList.toggle("active");
})

// Validation
function validasi(event) {
  event.preventDefault();
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("genderError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("addressError").textContent = "";

  var isValid = true;
  // Nama
  var name = document.getElementById("name").value;
  console.log(name);
  if (name.length < 1) {
    isValid = false;
    document.getElementById("nameError").textContent = "A name is required";
  }

  // Email
  var email = document.getElementById("email").value;
  if (email.length < 1) {
    isValid = false;
    document.getElementById("emailError").textContent =
      "An email address is required";
  } else if (!email.endsWith("@gmail.com")) {
    isValid = false;
    document.getElementById("emailError").textContent =
      "Please enter a valid email address";
  }

  // nomor hp
  var phone = document.getElementById("phone").value;
  if (phone.length < 11) {
    isValid = false;
    document.getElementById("phoneError").textContent =
      "A phone number must be valid";
  }

  // gender
  var male = document.getElementById("gendermale").checked;
  var female = document.getElementById("genderfemale").checked;
  var other = document.getElementById("genderother").checked;
  if (!male && !female) {
    isValid = false;
    document.getElementById("genderError").textContent = "A gender is required";
  }

  // address
  var message = document.getElementById("address").value;
  if (message.length < 1) {
    isValid = false;
    document.getElementById("addressError").textContent =
      "A address is required";
  }

  if (isValid) {
    document.getElementById("ContactForm").submit();
  }
}
