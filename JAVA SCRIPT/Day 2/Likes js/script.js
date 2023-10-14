// Display a message in the console when the page is loading
console.log("page loading...");

// Initialize an array to store the initial number of likes for each post
var likes = [9, 12, 9];

// Create an array to store references to the HTML elements with IDs "pup1", "pup2", and "pup3"
var spans = [
    document.querySelector("#pup1"),
    document.querySelector("#pup2"),
    document.querySelector("#pup3")
];

// Define a function 'like' that increases the number of likes for a specific post
function like(id) {
    // Increment the number of likes for the specified post
    likes[id]++;

    // Update the content of the HTML element corresponding to the post with the new like count
    spans[id].innerHTML = likes[id] + " like(s)";
}





