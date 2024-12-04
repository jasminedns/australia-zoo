let birds = []

const bird1 = {
    name: "Cassowary",
    lifespan: "20 years",
    group: "bird",
    image: "../images/transparent-img/cassowary.png",
    food: "Plants matter like fruit, insects and small animals like mice and lizards",
    shortDescription:   `It’s not hard to imagine that cassowaries are descended from dinosaur ancestors.
                        The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.
                        These large birds cannot fly, but their extremely powerful legs propel them at great speeds.` ,
    fulldescription:    `It’s not hard to imagine that cassowaries are descended from dinosaur ancestors.
                        The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.
                        These large birds cannot fly, but their extremely powerful legs propel them at great speeds.
                        They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and
                        they are usually hard to spot, at least in their natural rain forest habitats.
                        They are not overly aggressive, and attacks are rare. But they can do a lot of damage
                        if they are provoked or angered. Cassowary attacks have occasionally been deadly, including
                        a recent one which occurred in 2019, at a private collection of caged birds in Florida.`,
    length: "1.7m",
    weight: "44kg",
    found: "Queensland"
};

const bird2 = {
    name: "Kookaburra",
    lifespan: "20 years",
    group: "bird",
    image: "../images/transparent-img/kookaburra.png",
    food: "Insects and small animals including snakes, frogs and lizards",
    shortDescription:   `Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest
                        member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm
                        in length.`,
    fulldescription:    `Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest
                        member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm
                        in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and
                        small vertebrates, including the occasional small snake. Since being introduced in western Australia
                        and New Zealand, the kookaburra has angered farmers by preying on their fowl.
                        The laughing kookaburra has dark brown wing plumage and a white head and underside.
                        Dark brown eye stripes run across its face and its upper bill is black.
                        Its reddish-coloured tail is patterned with black bars.`,
    length: "43cm",
    weight: "300g",
    found: "Australia wide"
};

const bird3 = {
    name: "Yellow-Tailed Black Cockatoo",
    lifespan: "41 years",
    group: "bird",
    image: "../images/transparent-img/yellow-tailed-black-cockatoo.PNG",
    food: "Fruit, seeds and other plant material",
    shortDescription:   `It has a short crest on the top of its head. Its plumage is mostly brownish black and
                        it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged
                        with yellow giving a scalloped appearance.`,
    fulldescription:    `It has a short crest on the top of its head. Its plumage is mostly brownish black and
                        it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged
                        with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red
                        eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed
                        black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud,
                        wailing calls carry for long distances. The whiteae is found south of Victoria to the East
                        of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in
                        temperate forests and forested areas across south and central eastern Queensland to
                        southeastern South Australia, including a very small population persisting in the Eyre Peninsula.`,
    length: "65cm",
    weight: "900g",
    found: "Southeastern Australia"
};

const addBirds = () => {
    birds.push(bird1);
    birds.push(bird2);
    birds.push(bird3);
}

let animalMenuEl = document.querySelector(".animalmenu__cointainer");
let birdFirstNameEl = document.querySelector(".section-2__title--changeContent-1");
let birdLastNameEl = document.querySelector(".section-2__title--changeContent-2");
let birdImgEl = document.querySelector(".section-2__img--changeContent");
let birdDescEl = document.querySelector(".section-2__text--changeContent");
let readMoreEl = document.querySelector(".section-2__text--readmore");


const ourBirds = () => {
    document.querySelector(".section-1__text--changeContent").textContent = `At our zoo, we are proud to host a diverse array of avian wonders. Among our feathered
    residents, you'll find the majestic Yellow-Tailed Black Cockatoo, known for its striking plumage and distinctive call. The Kookaburra, with its iconic laughter-like
    call, adds a touch of the Australian bush to our aviary. Lastly, the formidable Cassowary, often referred to as the world's most dangerous bird, captivates visitors
    with its vibrant blue and black feathers and imposing presence. Each of these birds brings a unique charm and character to our zoo, making it a must-visit for bird
    enthusiasts and nature lovers alike.`
    document.querySelector(".section-1__title--changeContent-1").textContent = `Our`
    document.querySelector(".section-1__title--changeContent-2").textContent = `birds`
}

const defaultSection2Content = () => {
    birdFirstNameEl.textContent = `Feathered`
    birdLastNameEl.textContent = `dream`

    birdImgEl.classList.add("hidden")

    birdDescEl.textContent = `At our zoo, we treat our birds like the VIPs (Very Important Parrots) they are! Each bird gets a custom-built habitat that’s more luxurious than 
    a five-star resort, complete with all the amenities they could ever want. Our avian team makes sure every bird is in tip-top shape, well-fed, and never bored. We even 
    have birdie spa days with feather fluffing and beak buffing. Our goal is to make sure our feathered friends are living their best lives, and trust us, they’re loving every minute of it!`
    readMoreEl.classList.add("hidden")
}

const buttonsAndEvents = () => {
    for (let birdNumber = 0; birdNumber < birds.length; birdNumber++) {
        let animalDiv = document.createElement("div");
        
            animalDiv.textContent = birds[birdNumber].name
            animalDiv.classList.add("animalMenu__element")
            animalMenuEl.appendChild(animalDiv)
            
            let animalMenuEls = document.querySelectorAll(".animalMenu__element");
        
            animalMenuEls.forEach((item, birdButton) => { item.addEventListener("click", () => {
                animalMenuEls.forEach(e => e.classList.remove("animalMenu__element--active"))
                    item.classList.add("animalMenu__element--active");
        
                if (birdButton === 2) {
                    let splitName = birds[birdButton].name.split(" ")
        
                    birdFirstNameEl.textContent = splitName[0];
                    birdLastNameEl.textContent = `${splitName[1]} ${splitName[2]}`
        
                    birdLastNameEl.classList.remove("hidden")
                    birdFirstNameEl.classList.add("section-2__title--active")
        
                } else { 
                    birdFirstNameEl.textContent = birds[birdButton].name;
                    birdLastNameEl.textContent = ``;
        
                    birdLastNameEl.classList.add("hidden")
                }
        
                birdImgEl.classList.remove("hidden")
                birdImgEl.src = birds[birdButton].image

                birdDescEl.textContent = birds[birdButton].shortDescription
                readMoreEl.classList.remove("hidden")
                readMoreEl.textContent = `Read more...`

            })

            readMoreEl.addEventListener("click", () => {
                birdDescEl.textContent = birds[birdButton].fulldescription
                readMoreEl.textContent = ``;
            })
        })
    }        
}


const launch = () => {
    addBirds();
    ourBirds();
    defaultSection2Content();
    buttonsAndEvents();
}

launch();