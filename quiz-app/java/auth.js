function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  Swal.fire("Success", "Account Created!", "success").then(() => {
    window.location = "index.html";
  });
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    localStorage.setItem("loggedIn", "true");
    Swal.fire("Welcome", "Login Successful!", "success").then(() => {
      window.location = "dashboard.html";
    });
  } else {
    Swal.fire("Error", "Invalid Credentials!", "error");
  }
}