myCats = {
    cat: [
        {
            "id": 1,
            "name": "Chico",
            "description": "O Chico cansou de ser cat e virou Dinossauro.",
            "imgUrl": "images/gato-01.jpg",
            "externalLink": "https://www.instagram.com/canseidesergato/"
        },

        {
            "id": 2,
            "name": "Hamilton",
            "description": "Hamilton é o gato mais hipster que você vai ver hoje.",
            "imgUrl": "images/gato-02.jpg",
            "externalLink": "https://www.instagram.com/hamilton_the_hipster_cat/"
        },

        {
            "id": 3,
            "name": "Nala",
            "description": "Nala é uma gatinha muito simpática e extrovertida.",
            "imgUrl": "images/gato-03.jpg",
            "externalLink": "https://www.instagram.com/nala_cat/"
        },
    ]
}

var cardCat = document.getElementById('card');
var cardBody = document.querySelector(".card-body");
var btn = document.getElementById('btn');

function getCat() {
    let catNameInput = document.getElementById('myInput').value.toLowerCase();

    for(let i = 0; i < myCats.cat.length; i++) {
        let currentCat = myCats.cat[i];
        if(catNameInput == currentCat.name.toLowerCase()) {
            console.log("This cat belongs on the list");

            cardCat.querySelector("img").setAttribute("src", currentCat.imgUrl);
            cardBody.querySelector("h1").innerHTML = currentCat.name;
            cardBody.querySelector("p").innerHTML = currentCat.description;
            return;
        } else {
            console.log("This cat doesn't belongs on the list");
        }
    }
}

btn.addEventListener('click', getCat);