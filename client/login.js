function logIn() {
  let userid = document.getElementById(`userid`).value;
  let password = document.getElementById(`password`).value;
  let valueCheck = "";

  fetch(`http://localhost:3000/user/login`, { method: "POST", headers: { 'Content-type': "application/json" }, body: JSON.stringify({ "user_id": userid, "password": password }) })
    .then((response) => {
      console.log(response.text())
      window.location.href = 'index.html';
      sessionStorage.setItem("userid", userid);
    })
    .catch((error) => {
      console.log("error", error)
      alert('Wrong username/password... please try again')
    });
}

document.onload = function() {
  let userid = document.getElementById(`userid`).value;
  let password = document.getElementById(`password`).value;
  
  // This allows us to login by hitting the 'Enter' key
  userid.addEventListener("keypress", function (event) {
    if (event.defaultPrevented) {
      return;
    }
    switch (event.key) {
      case "Enter":
        logIn();
        break;
      default:
        return;
    }
    event.preventDefault();
  });
  
  // This allows us to login by hitting the 'Enter' key
  // when cursor at password form
  password.addEventListener("keypress", function (event) {
    if (event.defaultPrevented) {
      return;
    }
    switch (event.key) {
      case "Enter":
        logIn();
        break;
      default:
        return;
    }
    event.preventDefault();
  });

}

  // function addUser() {
  //   let userid = document.getElementById(`userid`).value;
  //   fetch(`http://localhost:3000/user/add/?name=${userid}`, { method: "POST" })
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error))

  //   setTimeout(function () {
  //     window.location.href = "main.html";
  //   }, 1000);
  // }
  