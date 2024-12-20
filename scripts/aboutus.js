let allTeamMembers = [];
let allTeamButtons = [];

let memberInfo_el = document.querySelector(".team-content__member-info");
let memberPicture_el = document.querySelector(".team-content__member-picture");
let memberFname_el = document.querySelector(".team-content__member-fname");
let memberLname_el = document.querySelector(".team-content__member-lname");

function TeamMember(fullname, hobbies, country, topFiveAnimals, picture) {
    this.fullname = fullname;
    this.hobbies = hobbies;
    this.country = country;
    this.topFiveAnimals = topFiveAnimals;
    this.picture = picture;
}

const createMembers = () => {
    allTeamMembers.push(new TeamMember("Tobias Kjernell", ["Music", "Spicy food", "Movies and TV-series", "Long naps"], "Sweden", ["Rabbit", "Cat", "Dog", "Squirrel", "Dolphin"], "tobias.jpg"));
    allTeamMembers.push(new TeamMember("Srilatha Potnuru", ["Badminton"], "India", ["Dog", "Parrot", "Cat", "Peacock", "Panda"], "srilatha.jpg"));
    allTeamMembers.push(new TeamMember("Caroline Lindbom", ["Hiking"], "Sweden", ["Dog", "Alpaca", "Raven", "Owl", "Cat"], "caroline.jpg"));
    allTeamMembers.push(new TeamMember("Mariym Aqbal", ["Reading", "Watching historical films", "Music", "Cricket", "Tennis", "Football", "Hockey"], "Pakistan", ["Cat", "Rabbit", "Panda", "Kangaroo", "Pigeon"], "mariym.png"));
    allTeamMembers.push(new TeamMember("Jasmine Danese", ["Gaming", "Procrastinate"], "Italy", ["Otter", "Quokka", "Capybara", "Raccoon", "Fox"], "jasmine.jpg"));
}

const setIntroductionInfo = (firstEl, lastEl, infoText) => {
    infoText.classList.add("medium-horizontal-padding");
    firstEl.textContent = "the";
    lastEl.textContent = "zookepers";
    infoText.textContent = `Hello! We are ${allTeamMembers.length} people currently working at this Zoo. We are a small team spreading out our work hours around the clock. So people work day-time, others work night-time to keep the work flowing. Our team is called "The Zookeepers"!`
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

            memberPicture_el.src = `../images/team/${allTeamMembers[index].picture}`;
            memberPicture_el.alt = `Photo of ${splitName[0] ?? "error"}`;
            document.querySelector(".team-content__picture-area").classList.remove("hidden")

            memberInfo_el.textContent = `Hi!\n My name is ${allTeamMembers[index].fullname} and im from ${allTeamMembers[index].country}! Fun facts about me: my top 5 animals: ${allTeamMembers[index].topFiveAnimals.join(", ").toLowerCase()}. My hobbies: ${allTeamMembers[index].hobbies.join(", ").toLowerCase()}`;

            for (let k = 0; k < allTeamButtons.length; k++) {
                if (allTeamButtons[k].classList.contains("team-content__button--active"))
                    allTeamButtons[k].classList.remove("team-content__button--active")
            }

            allTeamButtons[index].classList.add("team-content__button--active")
            memberInfo_el.classList.remove("medium-horizontal-padding");
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

/* Init */
InitSetup();
