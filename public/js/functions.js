const dropdownMenu = document.querySelector(".dropdown");
const toggleBtn = document.querySelector(".pages-icon");
const toggleBtnIcon = document.querySelector(".pages-icon b");

toggleBtn.onclick = function() {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen 
    ? toggleBtnIcon.innerHTML = '<img src="/images/exit.svg">' 
    : toggleBtnIcon.innerHTML = '☰' 
}
// Reset the overlay display property based on screen size
window.addEventListener('resize', function() {
    const overlay = document.getElementById('overlay');
    if (window.matchMedia("(min-width: 601px)").matches) {
        overlay.style.display = 'flex'; // Show the overlay on larger screens
    } else if (window.matchMedia("(max-width: 600px)").matches) {
        overlay.style.display = 'none'; // Hide the overlay on small screens
    }
});
