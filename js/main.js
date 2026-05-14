const universities = [
    {
        name: "Amity Online",
        location: "Noida, UP · UGC, NAAC A+",
        logo: "img/Amity_University_logo.png"
    },

    {
        name: "Manipal Online",
        location: "Manipal, Karnataka · UGC, NAAC A+",
        logo: "img/Manipal_University_Jaipur_logo.png"
    },

    {
        name: "NMIMS Online",
        location: "Mumbai, MH · UGC, NAAC A++",
        logo: "img/NMIMS_Logo.png"
    },

    {
        name: "DPU Online",
        location: "Pune, MH · UGC, NAAC A++",
        logo: "img/DPU_Logo.png"
    },

    {
        name: "IGNOU",
        location: "New Delhi · UGC, NAAC A+",
        logo: "img/IGNOU_LOGO.png"
    },

    {
        name: "Symbiosis Online",
        location: "Pune, MH · UGC, NAAC A++",
        logo: "img/Symbiosis_International_University_Logo.png"
    }
];

const modalOverlay = document.getElementById("modalOverlay");
const universityList = document.getElementById("universityList");
const searchInput = document.getElementById("searchInput");
const modalClose = document.getElementById("modalClose");

let currentCard = null;

let selectedUniversities = {
    1: null,
    2: null
};

/* =========================
OPEN MODAL
========================= */

document.querySelectorAll("[data-open]").forEach(btn => {

    btn.addEventListener("click", () => {

        currentCard = btn.dataset.open;

        openModal();
    });

});

/* =========================
OPEN
========================= */

function openModal(){

    modalOverlay.classList.add("active");

    renderUniversities();
}

/* =========================
CLOSE
========================= */

function closeModal(){

    modalOverlay.classList.remove("active");

}

/* =========================
CLOSE EVENTS
========================= */

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {

    if(e.target === modalOverlay){
        closeModal();
    }

});

/* =========================
RENDER LIST
========================= */

function renderUniversities(search = ""){

    universityList.innerHTML = "";

    const usedUniversities = Object.values(selectedUniversities)
        .filter(Boolean);

    const filtered = universities.filter(uni => {

        const alreadyUsed = usedUniversities.includes(uni.name);

        if(currentCard){

            const currentSelected = selectedUniversities[currentCard];

            if(currentSelected === uni.name){
                return false;
            }

        }

        return (
            !alreadyUsed &&
            uni.name.toLowerCase().includes(search.toLowerCase())
        );

    });

    filtered.forEach(uni => {

        const div = document.createElement("div");

        div.className = "university-item";

        div.innerHTML = `
            <img src="${uni.logo}">
            
            <div class="uni-info">
                <h4>${uni.name}</h4>
                <p>${uni.location}</p>
            </div>
        `;

        div.addEventListener("click", () => {

            selectUniversity(uni);

        });

        universityList.appendChild(div);

    });

}

/* =========================
SEARCH
========================= */

searchInput.addEventListener("input", (e) => {

    renderUniversities(e.target.value);

});

/* =========================
SELECT UNIVERSITY
========================= */

function selectUniversity(uni){

    selectedUniversities[currentCard] = uni.name;

    document.getElementById(`logo${currentCard}`).src = uni.logo;

    document.getElementById(`name${currentCard}`).innerText = uni.name;

    const card = document.getElementById(`card${currentCard}`);

    card.querySelector(".empty-state").style.display = "none";

    card.querySelector(".selected-state").style.display = "block";

    card.querySelector(".close-btn").style.display = "flex";

    closeModal();
}

/* =========================
REMOVE UNIVERSITY
========================= */

document.querySelectorAll(".close-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const cardNumber = btn.dataset.card;

        selectedUniversities[cardNumber] = null;

        const card = document.getElementById(`card${cardNumber}`);

        card.querySelector(".empty-state").style.display = "block";

        card.querySelector(".selected-state").style.display = "none";

        btn.style.display = "none";

    });

});