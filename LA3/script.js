document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const message = document.getElementById("message").value;
  if (!name || !email || !age || !message) {
    alert("Please fill out all fields.");
    return;
  }
  if (isNaN(age) || parseInt(age) < 10) {
    alert("Age must be above 10 to register");
    return;
  }
  if (confirm("Confirm your details as it can't be changed later")) {
    alert("Details submitted successfully!");
    document.getElementById("myForm").reset();
  }
});
