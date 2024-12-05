let mammals = [];
let mammalMenuEl = document.querySelector(".animalmenu__container");
let mammalFirstNameEl = document.querySelector(".section-2__title--changeContent-1");
let mammalLastNameEl = document.querySelector(".section-2__title--changeContent-2");
let mammalImgEl = document.querySelector(".section-2__img--changeContent");
let mammalDescEl = document.querySelector(".section-2__text--changeContent");
let readMoreEl = document.querySelector(".section-2__text--readmore");

const addMammals = () => {

    mammals.push({
        name: "Tasmanian Devil",
        image: "tasmanian-devil.png",
        lifespan: "5 years",
        group: "mammals",
        food: "A predator, then eat meat from other animals such as wallabies and wombats",
        shortDescription: "A carnivorous marsupial found in Tasmania, known for its loud screeches...",
        fullDescription: "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
        length: "70cm",
        weight: "10kg",
        found: "Tasmania",
    });

    mammals.push({
        name: "Quokka",
        image: "quokka.png",
        lifespan: "10 years",
        group: "mammals",
        food: "Plant eaters, they munch on shrubs and grasses",
        shortDescription:  "A small, herbivorous marsupial known as the happiest animal due to its friendly appearance...",
        fullDescription: "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
        length: "50cm",
        weight: "3kg",
        found: "Only found on Rottnest Island and a few places on mainland Western Australia",
    });
    mammals.push({
        name: "Echidna",
        image: "echidna.png",
        lifespan: "50 years",
        group: "mammals",
        food: "insects such as ants and termites, beetle larvae and worms",
        shortDescription:  "A spiny, egg-laying mammal, one of only two monotremes in the world...",
        fullDescription: "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
        length: "76cm",
        weight: "10kg",
        found: "Throughout Australia",
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
    for (let mammalNumber = 0; mammalNumber < mammals.length; mammalNumber++) {
        let buttonAnimal = document.createElement("div");
        buttonAnimal.textContent = mammals[mammalNumber].name;
        buttonAnimal.classList.add("animalMenu__element");
        mammalMenuEl.appendChild(buttonAnimal);

        let animalMenuEls = document.querySelectorAll(".animalMenu__element");

        animalMenuEls.forEach((item, mammalButton) => {
            item.addEventListener("click", () => {
                animalMenuEls.forEach(e => e.classList.remove("animalMenu__element--active"));
                item.classList.add("animalMenu__element--active");

                // Set Mammal Details
                let splitName = mammals[mammalButton].name.split(" ");

                if (mammalButton === 1) {
                    let splitName = mammals[mammalButton].name.split(" ");
                    mammalFirstNameEl.textContent = splitName[0];
                    mammalLastNameEl.textContent = splitName[1] || '';
                    mammalLastNameEl.classList.remove("hidden");
                    mammalFirstNameEl.classList.add("section-2__title--active");
                } else {
                    mammalFirstNameEl.textContent = mammals[mammalButton].name;
                    mammalLastNameEl.textContent = ``;
                    mammalLastNameEl.classList.add("hidden");
                }
                mammalImgEl.classList.remove("hidden");
                mammalImgEl.src = `../images/transparent-img/${mammals[mammalButton].image}`
                mammalImgEl.alt = `Photo of ${mammals[mammalButton].name}`;

                mammalDescEl.textContent = mammals[mammalButton].shortDescription;
                readMoreEl.classList.remove("hidden");
                readMoreEl.textContent = `Read more...`;

                readMoreEl.addEventListener("click", () => {
                mammalDescEl.textContent = `${mammals[mammalButton].fullDescription}
                 This mammal weight up to ${mammals[mammalButton].weight}.
                 This mammal takes the food of ${mammals[mammalButton].food}.
                 Mammal lifespan is ${mammals[mammalButton].lifespan}.
                 The length of the mammal is ${mammals[mammalButton].length}.
                 This mammal can be found in ${mammals[mammalButton].found}.`;


                    readMoreEl.textContent = ``;
                });
            });
        });

    }
};

const launch = () => {
    addMammals();
    ourMammals();
    mammalSection2Content();
    buttonsAndEvents();
}

launch();