/* Variables */
let allTeamMembers = [];
let allTeamButtons = [];

let memberInfo_el = document.querySelector(".team-content__member-info");
let memberPicture_el = document.querySelector(".team-content__member-picture");
let memberFname_el = document.querySelector(".team-content__member-fname");
let memberLname_el = document.querySelector(".team-content__member-lname");

/* Functions */
function TeamMember(fullname, hobbies, country, topFiveAnimals, picture) {
    this.fullname = fullname;
    this.hobbies = hobbies;
    this.country = country;
    this.topFiveAnimals = topFiveAnimals;
    this.picture = picture;
}

const createMembers = () => {
    allTeamMembers.push(new TeamMember("Tobias Kjernell", ["Music", "Spicy food", "Movies and TV-series", "Long naps"], "Sweden", ["Rabbit", "Cat", "Dog", "Squirrel", "Dolphin"], "../images/team/tobias.jpg"));
    allTeamMembers.push(new TeamMember("Srilatha Potnuru", ["Badminton"], "India", ["Dog", "Parrot", "Cat", "Peacock", "Panda"], "../images/team/srilatha.jpg"));
    allTeamMembers.push(new TeamMember("Caroline Lindbom", ["Hiking"], "Sweden", ["Dog", "Alpaca", "Raven", "Owl", "Cat"], "../images/team/caroline.jpg"));
    allTeamMembers.push(new TeamMember("Mariym Aqbal", ["Reading", "Watching historical films", "Music", "Cricket", "Tennis", "Football", "Hockey"], "Pakistan", ["Cat", "Rabbit", "Panda", "Kangaroo", "Pigeon"], "../images/team/mariym.png"));
    allTeamMembers.push(new TeamMember("Jasmine Danese", ["Gaming", "Procrastinate"], "Italy", ["Otter", "Quokka", "Capybara", "Raccoon", "Fox"], "../images/team/jasmine.jpg"));
}

const setIntroductionInfo = (firstEl, lastEl, infoText) => {
    firstEl.textContent = "the";
    lastEl.textContent = "zookepers";
    infoText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, minima ipsa fugiat iste nobis vitae provident magnam explicabo omnis quaerat tempore! Quae minima tenetur, possimus repudiandae numquam explicabo ab exercitationem! ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque laudantium, amet laborum necessitatibus temporibus nesciunt sint quasi doloremque sunt laboriosam doloribus cupiditate, ea quaerat hic earum enim corporis nobis?"
}
const createButtonsAndEvents = () => {
    let parent = document.querySelector(".team-content__button-container");

    for (let index = 0; index < allTeamMembers.length; index++) {

        let button = document.createElement("div");
        let splitName = allTeamMembers[index].fullname.split(" ");

        button.classList.add("team-content__button");
        button.textContent = splitName[0];

        button.addEventListener('click', () => {

            if (button.classList.contains("team-content__button--active")) {
                setIntroductionInfo(memberFname_el, memberLname_el, memberInfo_el);

                button.classList.remove("team-content__button--active")
                document.querySelector(".team-content__picture-area").classList.add("hidden");
                return;
            }
            memberFname_el.textContent = splitName[0];
            memberLname_el.textContent = splitName[1];

            memberPicture_el.src = allTeamMembers[index].picture;
            memberPicture_el.alt = `Photo of ${splitName[0] ?? "error"}`;
            document.querySelector(".team-content__picture-area").classList.remove("hidden")

            memberInfo_el.textContent = `Hi!\n My name is ${allTeamMembers[index].fullname} and im from ${allTeamMembers[index].country}! Fun facts about me: my top 5 animals: ${allTeamMembers[index].topFiveAnimals.join(", ").toLowerCase()}. My hobbies: ${allTeamMembers[index].hobbies.join(", ").toLowerCase()}`;

            for (let k = 0; k < allTeamButtons.length; k++) {
                if (allTeamButtons[k].classList.contains("team-content__button--active"))
                    allTeamButtons[k].classList.remove("team-content__button--active")
            }
            allTeamButtons[index].classList.add("team-content__button--active")



        })

        parent.appendChild(button);
        allTeamButtons.push(button);
    }
}

const InitSetup = () => {
    createMembers();
    createButtonsAndEvents();
    setIntroductionInfo(memberFname_el, memberLname_el, memberInfo_el);
}

InitSetup();


