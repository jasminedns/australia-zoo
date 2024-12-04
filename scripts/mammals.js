/*const mammals = [
    {
        name: "Tasmanian Devil",
        group: "mammals",
        image: "..\images\transparent-img\tasmanian-devil.png",
        shortDescription: "A carnivorous marsupial found in Tasmania, known for its loud screeches...",
        fullDescription: "The Tasmanian Devil is the world's largest surviving carnivorous marsupial. Native to Tasmania, these nocturnal animals are known for their powerful jaws and fierce temperament. Despite their reputation, they play a crucial role in maintaining ecosystem balance.",
        diet: "Carrion, small animals, insects",
    },
    {
        name: "Quokka",
        group: "mammals",
        image: "..\images\transparent-img\quokka.png",
        shortDescription: "A small, herbivorous marsupial known as the happiest animal due to its friendly appearance...",
        fullDescription: "The Quokka is a small wallaby native to southwestern Australia, particularly Rottnest Island. Famous for its 'smiling' expression, it is a nocturnal herbivore that feeds on grass and leaves. Quokkas are social and thrive in groups.",
        diet: "Grasses, leaves, and roots",
    },
    {
        name: "Echidna",
        group: "mammals",
        image: "..\images\transparent-img\echidna.png",
        shortDescription: "A spiny, egg-laying mammal, one of only two monotremes in the world...",
        fullDescription: "The Echidna, also known as a spiny anteater, is a monotreme found in Australia and New Guinea. Known for its spines and long snout, it feeds primarily on ants and termites. Echidnas lay eggs and are solitary creatures.",
        diet: "Ants and termites",
    }
];

/*const ourMammals = () => {
    document.querySelector(".section-1__title--changeContent-1").textContent = ""
    document.querySelector(".section-1__title--changeContent-1").textContent = 'Our'
    document.querySelector(".section-1__title--changeContent-2").textContent = 'Mammals'

}
ourMammals();

const title1_el = document.querySelector(".section-2__title--changeContent-1");
const title2_el = document.querySelector(".section-2__title--changeContent-2");
const img_el = document.querySelector(".section-2__img--changeContent");
const text_el = document.querySelector(".section-2__text--changeContent");
const animalmenu = document.querySelector(".animalmenu__cointainer ul");

//Function to create buttons dynamically
const createMammalButtons = () => {
    mammals.forEach((mammal, index) => {
        // Create a list item for each mammal
        const li = document.createElement("li");
        li.textContent = mammal.name;

        // Add click event to update content
        li.addEventListener("click", () => {
            // Update section title and content
            title1_el.textContent = mammal.name.toUpperCase();
            title2_el.textContent = "FACTS";
            img_el.src = mammal.image;
            img_el.alt = mammal.name;
            text_el.textContent = `${mammal.fullDescription} They primarily feed on ${mammal.diet}.`;

            // Handle active state for the clicked button
            document.querySelectorAll(".animalmenu__cointainer li").forEach((item) => {
                item.classList.remove("active-mammal");
            });
            li.classList.add("active-mammal");
        });

        // Append the button to the container
        buttonContainer_el.appendChild(li);
    });
};

// Initialize the page
document.addEventListener("DOMContentLoaded", createMammalButtons);*/


// DOM Elements
const mammalName_el = document.querySelector(".section-2__title--changeContent-1");
const mammalsFacts_el = document.querySelector(".section-2__title--changeContent-2");
const mammalImg_el = document.querySelector(".section-2__img--changeContent");
const mammalDesc_el = document.querySelector(".section-2__text--changeContent");
const animalMenu_el = document.querySelector(".animalmenu__cointainer ul");

// Mammals data array
const mammals = [
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
];

const createMammalButtons = () => {
    mammals.forEach((mammal, index) => {
        // list item for each mammal
        let button = document.createElement("li");
        button.textContent = mammal.name;

        // Add click event to update content
        button.addEventListener("click", () => {
            // Update section title and content
            mammalName_el.textContent = mammal.name.toUpperCase();
            mammalsFacts_el.textContent = "FACTS";
            mammalImg_el.src = mammal.image;
            mammalImg_el.alt = "contain a photo of " + mammal.name;
            mammalDesc_el.textContent = `${mammal.fullDescription} They primarily feeds on ${mammal.diet}.`;

            //  clicked button active state
            document.querySelectorAll(".animalmenu__cointainer li").forEach((item) => {
                console.log(item);
                item.classList.remove("active-mammal");
            });
            button.classList.add("active-mammal");
        });

        // Append the button to the container
       animalMenu_el.appendChild(button);
    });
};

// Initialize the page
document.addEventListener("DOMContentLoaded", createMammalButtons);