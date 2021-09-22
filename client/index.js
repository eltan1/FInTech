function checkAuthenticated() {
    console.log('check')
    // Check if user is login
    let userId = sessionStorage.getItem("userid");
    if (userId === null) { 
        // not login
        redirectToLoginPage();
    }

    // Check if element on page to display user information
    let domUserId = document.getElementById('userid');
    if (domUserId)
        domUserId.innerHTML = userId;
}

function logout() {
    sessionStorage.removeItem("userid");
    redirectToLoginPage();
}

function redirectToLoginPage() {
    window.location.href = 'login.html';
}

checkAuthenticated();