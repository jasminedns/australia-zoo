let allTeamMembers = [];
let tobiasK, srilathaP, carolineL, mariymA, jasminD;

function TeamMember(fullname, hobbies, country, topFiveFood, picture) {
    this.fullname = fullname;
    this.hobbies = hobbies;
    this.country = country;
    this.topFiveFood = topFiveFood;
    this.picture = picture;

    allTeamMembers.push(this);
}

const createMembers = () => {
    tobiasK = new TeamMember("Tobias Kjernell", ["Music", "Spicy food", "Movies and TV-series", "Long naps"], "Sweden", ["Tonkatsu", "Wienerschnitzel with roasted potatoes", "Salmon Tikka Masala", "Creamy Chili Carbonara", "Sushi"], "'../images/team/tobias.png'");
    srilathaP = new TeamMember("Srilatha Potnuru", [""], [""], "India", [""], "'../images/team/srilatha.png'");
    carolineL = new TeamMember("Caroline Lindbom", [""], "Sweden", [""], "'../images/team/caroline.png'");
    mariymA = new TeamMember("Mariym Aqbal", [""], "Pakistan", [""], "'../images/team/mariym.png'");
    jasminD = new TeamMember("Jasmin Danese", [""], "Italy", [""], "'../images/team/jasmin.png")
}
console.log(allTeamMembers)
createMembers();

