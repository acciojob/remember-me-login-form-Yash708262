//your JS code here. If required.
// Get DOM elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("login-form");

// Check if credentials exist in localStorage
function checkExistingUser() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingBtn.style.display = "inline-block";
    } else {
        existingBtn.style.display = "none";
    }
}

// On page load
checkExistingUser();

// Submit form behavior
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
        // Save credentials
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        // Remove credentials
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    // Update existing user button visibility
    checkExistingUser();

    // Optionally, clear form
    form.reset();
});

// Login as existing user
existingBtn.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});
