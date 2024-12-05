let reptiles = [];

const frillNeckedLizard = {
    name: "Frill-Necked Lizard",
    lifespan: "20 years",
    group: "Reptile",
    image: "../images/transparent-img/frill-neck-lizard.png",
    food: "Small insects and spiders",
    shortDescription: "The frill-necked lizard is a reptile from northern Australia and New Guinea, known for its large, dramatic neck frill used to scare predators.",
    fulldescription: "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    length: "90cm",
    weight: "1kg",
    found: "Northern Australia"
};

const hawksbillTurtle = {
    name: "Hawksbill Turtle",
    lifespan: "50 years",
    group: "Reptile",
    image: "../images/transparent-img/hawkbill-turtle.png",
    food: "Other animals (sponges & jellyfish), sea plants",
    shortDescription: "The hawksbill turtle is a critically endangered sea turtle found in tropical oceans. Known for its striking, patterned shell.",
    fulldescription: "The Hawksbill Turtle gets its common name from the distinctive mouth, which resembles a bird's beak. The shell, or carapace, is covered in large overlapping scutes, which are distinctive brown/green/amber background with lighter brown streaks throughout. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown, or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80cm in length.",
    length: "80cm (carapace)",
    weight: "50kg",
    found: "Tropical coasts of Queensland, Northern Territory and Western Australia"
};

const perentie = {
    name: "Perentie",
    lifespan: "20 years",
    group: "Reptile",
    food: "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
    found: "Deserts",
    length: "2.5m",
    weight: "20kg",
    image: "../images/transparent-img/perentie.png",
    shortDescription: "The perentie is Australia's largest monitor lizard, found in arid and desert regions. Known for its speed and sharp claws, it is a skilled hunter.",
    fulldescription: "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṯaka dreaming.",
    length: "2.5m",
    weight: "20kg",
    found: "Deserts"
};

// Adding reptiles to the reptiles array
const addReptiles = () => {
    reptiles.push(frillNeckedLizard);
    reptiles.push(hawksbillTurtle);
    reptiles.push(perentie);
};

// Selecting DOM elements for reptiles section
let animalMenuEl = document.querySelector(".animalmenu__cointainer");
let reptileFirstNameEl = document.querySelector(".section-2__title--changeContent-1");
let reptileLastNameEl = document.querySelector(".section-2__title--changeContent-2");
let reptileImgEl = document.querySelector(".section-2__img--changeContent");
let reptileDescEl = document.querySelector(".section-2__text--changeContent");
let readMoreEl = document.querySelector(".section-2__text--readmore");

// Updating the description in section 1
const ourReptiles = () => {
    document.querySelector(".section-1__text--changeContent").textContent = `At our zoo, we are proud to host a diverse array of reptilian wonders. Among our scaly residents, you'll find the impressive Frill-Necked Lizard, known for its dramatic neck frill. The Hawksbill Turtle, with its striking patterned shell, swims gracefully in our aquatic section. Lastly, the Perentie, Australia’s largest monitor lizard, is a skilled hunter and a rare sight to behold. Each of these reptiles brings a unique charm and mystery to our zoo, making it a must-visit for reptile enthusiasts and nature lovers alike.`;
    document.querySelector(".section-1__title--changeContent-1").textContent = `Our`;
    document.querySelector(".section-1__title--changeContent-2").textContent = `reptiles`;
};

// Default content for section 2
const defaultSection2Content = () => {
    reptileFirstNameEl.textContent = `Scaly`;
    reptileLastNameEl.textContent = `wonders`;
    reptileImgEl.classList.add("hidden");

    reptileDescEl.textContent = `At our zoo, we take great pride in caring for our reptiles. From the agile Perentie to the colorful Frill-Necked Lizard, our reptiles live in carefully curated habitats that mimic their natural environments. Our dedicated reptile team ensures each species receives the best care, and we offer educational programs to help visitors understand these remarkable creatures.`;
    readMoreEl.classList.add("hidden");
};

// Handling button clicks to change content based on selected reptile
const buttonsAndEvents = () => {
    for (let reptileNumber = 0; reptileNumber < reptiles.length; reptileNumber++) {
        let animalDiv = document.createElement("div");
        animalDiv.textContent = reptiles[reptileNumber].name;
        animalDiv.classList.add("animalMenu__element");
        animalMenuEl.appendChild(animalDiv);

        let animalMenuEls = document.querySelectorAll(".animalMenu__element");

        animalMenuEls.forEach((item, reptileButton) => {
            item.addEventListener("click", () => {
                animalMenuEls.forEach(e => e.classList.remove("animalMenu__element--active"));
                item.classList.add("animalMenu__element--active");

                if (reptileButton === 1) {
                    let splitName = reptiles[reptileButton].name.split(" ");
                    reptileFirstNameEl.textContent = splitName[0];
                    reptileLastNameEl.textContent = splitName[1];
                    reptileLastNameEl.classList.remove("hidden");
                    reptileFirstNameEl.classList.add("section-2__title--active");
                } else {
                    reptileFirstNameEl.textContent = reptiles[reptileButton].name;
                    reptileLastNameEl.textContent = ``;
                    reptileLastNameEl.classList.add("hidden");
                }

                reptileImgEl.classList.remove("hidden");
                reptileImgEl.src = reptiles[reptileButton].image;
                reptileDescEl.textContent = reptiles[reptileButton].shortDescription;
                readMoreEl.classList.remove("hidden");
                readMoreEl.textContent = `Read more...`;
            });

            readMoreEl.addEventListener("click", () => {
                reptileDescEl.textContent = reptiles[reptileButton].fulldescription;
                readMoreEl.textContent = ``;
            });
        });
    }
};

// Launch function to initialize everything
const launch = () => {
    addReptiles();
    ourReptiles();
    defaultSection2Content();
    buttonsAndEvents();
};

launch();
