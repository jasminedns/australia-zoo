let allTeamMembers = [];
let tobiasK, srilathaP, carolineL, mariymA, jasminD;

function TeamMember(fullname, hobbies, country, topFiveFood, picture) {
    this.fullname = fullname;
    this.hobbies = hobbies;
    this.country = country;
    this.topFiveFood = topFiveFood;
    this.picture = picture;
}

const createMembers = () => {
    
    tobiasK = new TeamMember("Tobias Kjernell", ["Music", "Spicy food", "Movies and TV-series", "Long naps"], "Sweden", ["Tonkatsu", "Wienerschnitzel with roasted potatoes", "Salmon Tikka Masala", "Creamy Chili Carbonara", "Sushi"],"'../images/team/tobias.png'");
    allTeamMembers.push(tobiasK);

    srilathaP = new TeamMember("Srilatha Potnuru", [""], [""], "India", [""], "'../images/team/srilatha.png'");
    allTeamMembers.push(srilathaP);

    carolineL = new TeamMember("Caroline Lindbom", [""], "Sweden", [""],"'../images/team/caroline.png'");
    allTeamMembers.push(carolineL);

    mariymA = new TeamMember("Mariym Aqbal", [""], "Pakistan", [""], "'../images/team/mariym.png'");
    allTeamMembers.push(mariymA);

    jasminD = new TeamMember("Jasmin Danese", [""], "Italy", [""], "'../images/team/jasmin.png")
    allTeamMembers.push(jasminD);
}

createMembers();

