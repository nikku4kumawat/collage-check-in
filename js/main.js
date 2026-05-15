const universities = [

    {
        name: "Amity Online",
        location: "Noida, UP",
        logo: "img/Amity_University_logo.png",

        accreditation: "UGC, NAAC A+",
        fee: "1.5 - 2.0 L",
        emi: "✓ No-Cost EMI"
    },

    {
        name: "Manipal Online",
        location: "Manipal, Karnataka",
        logo: "img/Manipal_University_Jaipur_logo.png",

        accreditation: "UGC, NAAC A+",
        fee: "1.3 - 1.8 L <span class='best-tag'>⭐ Best</span>",
        emi: "✓ No-Cost EMI"
    },

    {
        name: "NMIMS Online",
        location: "Mumbai, MH",
        logo: "img/NMIMS_Logo.png",

        accreditation: "UGC, NAAC A++",
        fee: "1.8 - 2.5 L",
        emi: "✓ Available"
    },

    {
        name: "DPU Online",
        location: "Pune, MH",
        logo: "img/DPU_Logo.png",

        accreditation: "UGC, NAAC A++",
        fee: "1.3 - 1.9 L <span class='best-tag'>⭐ Best</span>",
        emi: "✓ Available"
    },

    {
        name: "IGNOU",
        location: "New Delhi",
        logo: "img/IGNOU_LOGO.png",

        accreditation: "UGC, NAAC A+",
        fee: "0.5 - 1.5 L <span class='best-tag'>⭐ Best</span>",
        emi: "✓ Not Available"
    },

    {
        name: "Symbiosis Online",
        location: "Pune, MH",
        logo: "img/Symbiosis_International_University_Logo.png",

        accreditation: "UGC, NAAC A++",
        fee: "1.8 - 2.4 L <span class='best-tag'>⭐ Best</span>",
        emi: "✓ No-Cost EMI"
    }

];


/* =========================
ELEMENTS
========================= */

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
    .filter(Boolean)
    .map(uni => uni.name);

    const filtered = universities.filter(uni => {

        const alreadyUsed = usedUniversities.includes(uni.name);

        if(currentCard){

            const currentSelected = selectedUniversities[currentCard];

            if(currentSelected?.name === uni.name){

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

    selectedUniversities[currentCard] = uni;

    // TOP CARD UPDATE

    document.getElementById(`logo${currentCard}`).src = uni.logo;

    document.getElementById(`name${currentCard}`).innerText = uni.name;

    const card = document.getElementById(`card${currentCard}`);

    card.querySelector(".empty-state").style.display = "none";

    card.querySelector(".selected-state").style.display = "block";

    card.querySelector(".close-btn").style.display = "flex";

    // UPDATE COMPARISON

    updateComparison();

    closeModal();

}


/* =========================
UPDATE COMPARISON
========================= */

function updateComparison(){

    const uni1 = selectedUniversities[1];

    const uni2 = selectedUniversities[2];

    // =========================
    // AGAR DONO SELECT NAHI HAI
    // =========================

    if(!uni1 || !uni2){

        // HIDE LOGOS

        document.getElementById("tableLogo1").style.display = "none";

        document.getElementById("tableLogo2").style.display = "none";

        // SHOW DEFAULT TEXT

        document.getElementById("defaultText1").style.display = "block";

        document.getElementById("defaultText2").style.display = "block";

        // RESET TEXT

        document.getElementById("tableName1").innerText = "Select";

        document.getElementById("tableName2").innerText = "Select";

        document.getElementById("tableLocation1").innerText = "University";

        document.getElementById("tableLocation2").innerText = "University";

        // RESET TABLE

        document.getElementById("accreditation1").innerHTML = "🔒";

        document.getElementById("accreditation2").innerHTML = "🔒";

        document.getElementById("fee1").innerHTML = "🔒";

        document.getElementById("fee2").innerHTML = "🔒";

        document.getElementById("emi1").innerHTML =
        `<span class="success-pill">✓ 🔒</span>`;

        document.getElementById("emi2").innerHTML =
        `<span class="success-pill">✓ 🔒</span>`;

        return;

    }

    // =========================
    // SHOW LOGOS
    // =========================

    const logo1 = document.getElementById("tableLogo1");

    logo1.src = uni1.logo;

    logo1.style.display = "block";

    document.getElementById("defaultText1").style.display = "none";


    const logo2 = document.getElementById("tableLogo2");

    logo2.src = uni2.logo;

    logo2.style.display = "block";

    document.getElementById("defaultText2").style.display = "none";


    // =========================
    // HEADER UPDATE
    // =========================

    document.getElementById("tableName1").innerText = uni1.name;

    document.getElementById("tableName2").innerText = uni2.name;

    document.getElementById("tableLocation1").innerText =
    uni1.location;

    document.getElementById("tableLocation2").innerText =
    uni2.location;


    // =========================
    // TABLE DATA UPDATE
    // =========================

    document.getElementById("accreditation1").innerHTML =
    uni1.accreditation;

    document.getElementById("accreditation2").innerHTML =
    uni2.accreditation;


    document.getElementById("fee1").innerHTML =
    uni1.fee;

    document.getElementById("fee2").innerHTML =
    uni2.fee;


    document.getElementById("emi1").innerHTML =
    `<span class="success-pill">${uni1.emi}</span>`;


    document.getElementById("emi2").innerHTML =
    `<span class="success-pill">${uni2.emi}</span>`;

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

        // RESET COMPARISON

        updateComparison();

    });

});