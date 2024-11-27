let allTeamMembers = [];
let tobiasK, srilathaP, carolineL, mariymA, jasminD;

function TeamMember(fullname, hobbies, country, topFiveAnimals, picture) {
    this.fullname = fullname;
    this.hobbies = hobbies;
    this.country = country;
    this.topFiveAnimals = topFiveAnimals;
    this.picture = picture;

    allTeamMembers.push(this);
}

const createMembers = () => {
    tobiasK = new TeamMember("Tobias Kjernell", ["Music", "Spicy food", "Movies and TV-series", "Long naps"], "Sweden", ["Rabbit", "Cat", "Dog", "Squirrel", "Dolphin"],"../images/team/tobias.jpg");
    srilathaP = new TeamMember("Srilatha Potnuru", ["Badminton"], "India", ["Dog", "Parrot", "Cat", "Peacock", "Panda"], "../images/team/srilatha.png");
    carolineL = new TeamMember("Caroline Lindbom", ["Hiking"], "Sweden", ["Dog", "Alpacka", "Raven", "Owl", "Cat"], "../images/team/caroline.jpg");
    mariymA = new TeamMember("Mariym Aqbal", ["Reading", "Watching historical films", "Music", "Cricket", "Tennis", "Football", "Hockey"], "Pakistan", ["Cat", "Rabbit", "Panda", "Kangaroo", "Pigeon"], "../images/team/mariym.png");
    jasminD = new TeamMember("Jasmine Danese", ["Gaming", "Procrastinate"], "Italy", ["Otter", "Quokka", "Capybara", "Raccoon", "Fox"], "../images/team/jasmine.jpg");
}

createMembers();

