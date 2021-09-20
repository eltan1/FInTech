// Check if user is login
let userId = sessionStorage.getItem("userid");
if (!userId) { 
    // not login
    redirectToLoginPage();
}

let domUserId = document.getElementById('userid');
domUserId.innerHTML = userId;

function logout() {
    sessionStorage.removeItem("userid");
    redirectToLoginPage();

}

function redirectToLoginPage() {
    window.location.href = 'login.html';
}