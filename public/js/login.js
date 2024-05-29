// var LoginSignupLink = document.querySelectorAll(".page-content .login-footer a")
// var formPopup = document.querySelectorAll(".page-container")

// // 
// LoginSignupLink.forEach(link => {
//     link.addEventListener("click", (e) =>{
//         e.preventDefault();
//         formPopup.ClassList[link.id === "signup-link" ? 'add': 'remove']("show-signup");
//     });
// });

// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const loginPage = document.querySelector('.login');
    const signupPage = document.querySelector('.signup');

    // Initially hide signup page
    signupPage.style.display = 'none';

    // Event listener for login link
    loginLink.addEventListener('click', function() {
        loginPage.style.display = 'block';
        signupPage.style.display = 'none';
    });

    // Event listener for signup link
    signupLink.addEventListener('click', function() {
        loginPage.style.display = 'none';
        signupPage.style.display = 'block';
    });
});
