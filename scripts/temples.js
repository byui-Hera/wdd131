// Set the current year in the footer
let d = new Date();
document.getElementById("currentYear").innerHTML = `\u00A9${d.getFullYear()}`;

// Set the last modified date in the footer
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu functionality
const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
    document.querySelector('h1').classList.toggle('show');
    document.querySelector('#navmenu').classList.toggle('show');
    hambutton.classList.toggle('show');
});

// Function to toggle active class
function toggleActive(element) {
    element.classList.toggle("active");
}
