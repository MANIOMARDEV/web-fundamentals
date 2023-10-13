// Function to log a message when the page is loaded
console.log("page loaded...");

// Function to toggle the text of a login button between "Login" and "Logout"
function login(element)
 {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

// Function to display an alert when a like button is clicked
function message() {
    alert("Ninja was liked when clicking a like button");
}

// Function to hide an element from the page
function hide(x) {
    x.remove();
}