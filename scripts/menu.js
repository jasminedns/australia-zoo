// Toggle side menu when hamburger is clicked
const hamburgerMenu = document.getElementById('hamburgerMenu');
const sideMenu = document.getElementById('sideMenu');

hamburgerMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    hamburgerMenu.classList.toggle('open');
});

//Force collapse menu if we going "backwards"
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        sideMenu.classList.remove("open");
        hamburgerMenu.classList.remove("open");
    }
});
