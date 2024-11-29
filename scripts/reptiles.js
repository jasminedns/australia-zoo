// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the button
    const button = document.getElementById("myButton");
    
    // Add a click event listener to the button
    button.addEventListener("click", () => {
        alert("Button was clicked!");
    });
});
