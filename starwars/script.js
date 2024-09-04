const starWarsChars = {
  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 18,
      name: "Wedge Antilles",
      pic: "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
      homeworld: "corellia",
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ],
};
let filteredHomeworld = "";
let showAll = false;

//burası bütün karakterleri gösterdiğim fonksiyon
function renderAllCharacters() {
  const container = document.getElementById("container");
  container.classList.remove("hidden");
  container.style.overflow = "hidden";
  container.innerHTML = "";

  let rowContent = "";
  const allCharacters = starWarsChars.characters;

  allCharacters.forEach((character, index) => {
    if (index % 4 === 0 && index !== 0) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="row d-flex justify-content-center">${rowContent}</div>`
      );
      rowContent = "";
    }

    const cardHTML = `
                  <div class="col-auto m-4">
                      <div class="card" style="border-color:black; width:314px; height:604px; background-color:black;">
                          <img src="${
                            character.pic
                          }" class="imageStyle img-fluid rounded" alt="${
      character.name
    }">
                          <div class="card-body">
                              <h3 class="card-title" style="text-align: center;">${character.name.toLowerCase()}</h3>
                              <p class="card-text" style="text-align: center;">
                                  homeworld: ${
                                    character.homeworld
                                      ? character.homeworld.toLowerCase()
                                      : "other"
                                  } <br>
                                  id: ${character.id}
                              </p>
                          </div>
                      </div>
                  </div>
                `;
    rowContent += cardHTML;
  });

  if (rowContent) {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="row d-flex justify-content-center">${rowContent}</div>`
    );
  }
}

//burası homeworld  filtrelendirme sonucuna göre gösterdiğim fonksiyon
function renderCharacters() {
  const container = document.getElementById("container");
  container.classList.remove("hidden");
  container.style.overflow = "hidden";
  container.innerHTML = "";

  let rowContent = "";
  const charactersToShow = showAll
    ? starWarsChars.characters
    : starWarsChars.characters.filter((character) => {
        const characterHomeworld = character.homeworld
          ? character.homeworld.toLowerCase()
          : "other";
        return (
          filteredHomeworld === "" || characterHomeworld === filteredHomeworld
        );
      });

  charactersToShow.forEach((character, index) => {
    if (index % 4 === 0 && index !== 0) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="row d-flex justify-content-center">${rowContent}</div>`
      );
      rowContent = "";
    }

    const cardHTML = `
                  <div class="col-auto m-4">
                      <div class="card" style="border-color:black; width:314px; height:604px; background-color:black;">
                          <img src="${
                            character.pic
                          }" class="imageStyle img-fluid rounded" alt="${
      character.name
    }">
                          <div class="card-body">
                              <h3 class="card-title" style="text-align: center;">${character.name.toLowerCase()}</h3>
                              <p class="card-text" style="text-align: center;">
                                  homeworld: ${
                                    character.homeworld
                                      ? character.homeworld.toLowerCase()
                                      : "other"
                                  } <br>
                                  id: ${character.id}
                              </p>
                          </div>
                      </div>
                  </div>
                `;
    rowContent += cardHTML;
  });

  if (rowContent) {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="row d-flex justify-content-center">${rowContent}</div>`
    );
  }
}

// radyo butonları ekleyip seçilen radyo butonuna göre karakterlerin homelandine göre filtrelemek amacıyla yazdığım fonksiyon
function setupRadioButtons() {
  const radioContainer = document.getElementById("radio-container");
  radioContainer.innerHTML = "";

  homeworlds.forEach((homeworld) => {
    const radioHTML = `
                  <input type="radio" name="homeworld" value="${homeworld}" id="${homeworld}">
                  <label for="${homeworld}">${homeworld}</label><br>
                `;
    radioContainer.style.textAlign = "center";
    radioContainer.style.fontSize = "2rem";
    radioContainer.style.backgroundColor = "rgba(0, 0, 0, 0.548)";
    radioContainer.insertAdjacentHTML("beforeend", radioHTML);
  });

  radioContainer.addEventListener("change", (event) => {
    if (event.target.name === "homeworld") {
      filteredHomeworld = event.target.value;
      showAll = false;
      renderCharacters();
    }
  });
}

// buton işlemlerim
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const container = document.getElementById("container");
  const radioContainer = document.getElementById("radio-container");

  toggleButton.addEventListener("click", () => {
    if (toggleButton.innerText === "Show") {
      showAll = true;
      setupRadioButtons();
      renderCharacters();
      radioContainer.style.display = "block";
      container.classList.remove("hidden");
      toggleButton.innerText = "Close";
    } else {
      container.classList.add("hidden");
      radioContainer.style.display = "none";
      toggleButton.innerText = "Show";
    }
  });

  radioContainer.style.display = "none";
  container.classList.add("hidden");
});

const homeworldsRaw = starWarsChars.characters.map(
  (character) => character.homeworld
);
const updatedHomeworlds = homeworldsRaw.map((homeworld) =>
  homeworld ? homeworld.toLowerCase() : "other"
);
const homeworlds = [...new Set(updatedHomeworlds)];
