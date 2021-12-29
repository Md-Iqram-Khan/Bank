document.getElementById("submitLogin").addEventListener("click", function () {
  const emailField = document.getElementById("email");
  const userEmail = emailField.value;
  const passwordField = document.getElementById("password");
  const userPassword = passwordField.value;
  if (userEmail == "ik@gmail.com" && userPassword == "12345") {
    window.location.href = "banking.html";
  }
});
