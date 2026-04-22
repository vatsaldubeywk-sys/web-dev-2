function handleSubmit() {
  let name = document.getElementById("name");
  let roll = document.getElementById("roll");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  if (name === "") {
    alert("Student Name is required");
    return;
  }

  if (roll === "") {
    alert("Roll Number is required");
    return;
  }

  if (email === "") {
    alert("Email is required");
    return;
  }

  if (!email.includes("@")) {
    alert("@ missing");
    return;
  }

  if (phone === "") {
    alert("Phone Number is required");
    return;
  }

  if (phone.length!=10) {
    alert("Phone Number exactly 10 digits ka hona chahiye");
    return;
  }

  alert("Form submitted successfully");
}
console.log("hello");