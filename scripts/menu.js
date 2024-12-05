const pagesAndTitles = [
    ["index.html", "home"],
    ["birds.html", "birds"],
    ["reptiles.html", "reptiles"],
    ["mammals.html", "mammals"],
    ["aboutus.html", "about us"]
]
// Toggle side menu when hamburger is clicked
const hamburgerMenu = document.getElementById('hamburgerMenu');
const sideMenu = document.getElementById('sideMenu');


const generateMenuButtons = () => {
    let button_parent = document.querySelector(".side-button-parent");

    for (let index = 0; index < Object.keys(pagesAndTitles).length; index++) {
        let button_li = document.createElement("li");
        let button_link = document.createElement("a");
        let folderPath = window.location.pathname.split("/");

        button_parent.appendChild(button_li);
        button_li.appendChild(button_link);

        button_link.textContent = pagesAndTitles[index][1].toUpperCase();
      
        if (folderPath[folderPath.length - 2] !== "html")
            button_link.href = index === 0 ? pagesAndTitles[index][0] : `html/${pagesAndTitles[index][0]}`;
        else
            button_link.href = index === 0 ? `../${pagesAndTitles[index][0]}` : pagesAndTitles[index][0];
    }
}

//Events
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

generateMenuButtons();
