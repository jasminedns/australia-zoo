/*const mammals = [
    {
        name: "Tasmanian Devil",
        group: "mammals",
        image: "../images/transparent-img/tasmanian-devil.png",
        shortDescription: "A carnivorous marsupial found in Tasmania, known for its loud screeches...",
        fullDescription: "The Tasmanian Devil is the world's largest surviving carnivorous marsupial. Native to Tasmania, these nocturnal animals are known for their powerful jaws and fierce temperament. Despite their reputation, they play a crucial role in maintaining ecosystem balance.",
        diet: "Carrion, small animals, insects",
    },
    {
        name: "Quokka",
        group: "mammals",
        image: "../images/transparent-img/quokka.png",
        shortDescription: "A small, herbivorous marsupial known as the happiest animal due to its friendly appearance...",
        fullDescription: "The Quokka is a small wallaby native to southwestern Australia, particularly Rottnest Island. Famous for its 'smiling' expression, it is a nocturnal herbivore that feeds on grass and leaves. Quokkas are social and thrive in groups.",
        diet: "Grasses, leaves, and roots",
    },
    {
        name: "Echidna",
        group: "mammals",
        image: "../images/transparent-img/echidna.png",
        shortDescription: "A spiny, egg-laying mammal, one of only two monotremes in the world...",
        fullDescription: "The Echidna, also known as a spiny anteater, is a monotreme found in Australia and New Guinea. Known for its spines and long snout, it feeds primarily on ants and termites. Echidnas lay eggs and are solitary creatures.",
        diet: "Ants and termites",
    }
];*/

let allMammals = [];
let mammalMenuEl = document.querySelector(".animalmenu__container");
let mammalFirstNameEl = document.querySelector(".section-2__title--changeContent-1");
let mammalLastNameEl = document.querySelector(".section-2__title--changeContent-2");
let mammalImgEl = document.querySelector(".section-2__img--changeContent");
let mammalDescEl = document.querySelector(".section-2__text--changeContent");
let readMoreEl = document.querySelector(".section-2__text--readmore");

const addMammals = () => {
    allMammals.push({
        name: "Tasmanian Devil",
        shortDescription: "A carnivorous marsupial native to Tasmania, known for its screeches.",
        fulldescription: "The Tasmanian Devil is the largest surviving carnivorous marsupial. They are nocturnal and have a strong bite, feeding on carrion, small animals, and insects.",
        image: "tasmanian-devil.png"
    });
    allMammals.push({
        name: "Quokka",
        shortDescription: "A small herbivorous marsupial, often called the happiest animal.",
        fulldescription: "The Quokka is a nocturnal animal from Rottnest Island, Australia, and is known for its smiling appearance. They are social and live in groups.",
        image: "quokka.png"
    });
    allMammals.push({
        name: "Echidna",
        shortDescription: "A spiny, egg-laying mammal, one of only two monotremes.",
        fulldescription: "Echidnas are solitary animals found in Australia and New Guinea. They are known for their spines and long snouts, primarily eating ants and termites.",
        image: "echidna.png"
    });
}

const ourMammals = () => {
    document.querySelector(".section-1__text--changeContent").textContent = `Our zoo proudly hosts a variety of fascinating mammals. From the adorable Quokka, known as the happiest animal, to the unique Echidna, one of only two egg-laying mammals, and the fierce Tasmanian Devil, these mammals bring a distinct charm to our zoo. Come visit to learn more about these incredible creatures!`;
    document.querySelector(".section-1__title--changeContent-1").textContent = `Our`;
    document.querySelector(".section-1__title--changeContent-2").textContent = `Mammals`;
}

const mammalSection2Content = () => {
    mammalFirstNameEl.textContent = `Furry`;
    mammalLastNameEl.textContent = `Friends`;
    mammalImgEl.classList.add("hidden");
    mammalDescEl.textContent = `Our mammals are treated with the utmost care and respect. From large enclosures with natural habitats to specialized diets and enrichment activities, we make sure our mammals lead a healthy and happy life. Our zoo is dedicated to preserving these wonderful creatures and educating the public about them.`;
    readMoreEl.classList.add("hidden");
}

const buttonsAndEvents = () => {
    for (let mammalNumber = 0; mammalNumber < allMammals.length; mammalNumber++) {
        let animalDiv = document.createElement("div");
        animalDiv.textContent = allMammals[mammalNumber].name;
        animalDiv.classList.add("animalMenu__element");
        mammalMenuEl.appendChild(animalDiv);

        let animalMenuEls = document.querySelectorAll(".animalMenu__element");

        animalMenuEls.forEach((item, mammalButton) => {
            item.addEventListener("click", () => {
                animalMenuEls.forEach(e => e.classList.remove("animalMenu__element--active"));
                item.classList.add("animalMenu__element--active");

                // Set Mammal Details
                let splitName = allMammals[mammalButton].name.split(" ");

                mammalFirstNameEl.textContent = splitName[0];
                mammalLastNameEl.textContent = splitName[1] || ''; 
                mammalLastNameEl.classList.remove("hidden");
                mammalFirstNameEl.classList.add("section-2__title--active");

                mammalImgEl.classList.remove("hidden");
                mammalImgEl.src = `../images/transparent-img/${allMammals[mammalButton].image}`;
                mammalImgEl.alt = `Photo of ${allMammals[mammalButton].name}`;

                mammalDescEl.textContent = allMammals[mammalButton].shortDescription;
                readMoreEl.classList.remove("hidden");
                readMoreEl.textContent = `Read more...`;
            });

            // Read More functionality
            readMoreEl.addEventListener("click", () => {
                mammalDescEl.textContent = allMammals[mammalButton].fulldescription;
                readMoreEl.textContent = `Read Less...`;

                readMoreEl.addEventListener("click", () => {
                    mammalDescEl.textContent = allMammals[mammalButton].shortDescription;
                    readMoreEl.textContent = `Read more...`;
                });
            });
        });
    }
}

const launch = () => {
    addMammals();
    ourMammals();
    mammalSection2Content();
    buttonsAndEvents();
}

launch();