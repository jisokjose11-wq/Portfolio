// Welcome Message
window.onload = function() {
    alert("Welcome to My Portfolio!");
};

// Contact Form Message
function showMessage() {
    let name = document.getElementById("name").value;

    if(name === "") {
        alert("Please enter your name.");
    }
    else {
        alert("Thank you, " + name + "! Your message has been submitted.");
    }
}

// Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}