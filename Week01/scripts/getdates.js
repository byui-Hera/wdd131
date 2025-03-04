// JavaScript to dynamically update the year and last modified date

document.addEventListener('DOMContentLoaded', function () {
    // Set the current year dynamically
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;


    // Set the last modified date dynamically
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
});
