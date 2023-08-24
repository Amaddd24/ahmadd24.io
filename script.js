document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Perform login validation here (e.g., check username and password)

        // Simulate successful login for example
        const username = loginForm.querySelector('input[type="text"]').value;
        if (username === "123") { // Ganti "yourusername" dengan username yang valid
            window.location.href = "index.html"; // Redirect to login.html
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
