document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.getElementById("date");
    const today = new Date();

    // Format the date as you wish
    const options = { year: 'numeric'}; 
    const formattedDate = today.toLocaleDateString(undefined, options);

    // Insert the formatted date into the HTML
    dateElement.textContent = formattedDate;
});
