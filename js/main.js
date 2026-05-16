const universities = [

    {
        name: "Amity Online",
        location: "Noida, UP",
        logo: "img/Amity_University_logo.png",

        accreditation: "UGC, NAAC A+",
        fee: "1.5 - 2.0 L",
        emi: "✓ No-Cost EMI",

        ranking: "Top 40",
        salary: "₹8.5 LPA <span class='best-tag'>⭐ Best</span>",
        placement: "78%",
        monthlyEmi: "₹6,250/mo",
        alumni: "80,000+",
        scholarship: "Up to 20%",
        roi: "4.9x",
        roiTag: "High ROI",
        best: "—"
    },

    {
        name: "Manipal Online",
        location: "Manipal, Karnataka",
        logo: "img/Manipal_University_Jaipur_logo.png",

        accreditation: "UGC, NAAC A+",
        fee: "1.3 - 1.8 L <span class='best-tag'>⭐ Best</span>",
        emi: "✓ No-Cost EMI",

        ranking: "Top 50",
        salary: "₹8.2 LPA",
        placement: "85%",
        monthlyEmi: "₹4,200/mo",
        alumni: "1,50,000+",
        scholarship: "Up to 20%",
        roi: "5.3x",
        roiTag: "High ROI",
        best: "⭐ Recommended For You"
    },

    {
        name: "NMIMS Online",
        location: "Mumbai, MH",
        logo: "img/NMIMS_Logo.png",

        accreditation: "UGC, NAAC A++",
        fee: "1.8 - 2.5 L",
        emi: "✓ Available",

        ranking: "Top 50",
        salary: "₹9.5 LPA <span class='best-tag'>⭐ Best</span>",
        placement: "82% <span class='best-tag'>⭐ Best</span>",
        monthlyEmi: "₹6,500/mo",
        alumni: "90,000+",
        scholarship: "Up to 10%",
        roi: "4.4x <span class='best-tag'>⭐ Best</span>",
        roiTag: "High ROI",
        best: "⭐ Recommended For You"
    },

    {
        name: "DPU Online",
        location: "Pune, MH",
        logo: "img/DPU_Logo.png",

        accreditation: "UGC, NAAC A++",
        fee: "1.3 - 1.9 L <span class='best-tag'>⭐ Best</span>",
        emi: "✓ Available",

        ranking: "Top 40",
        salary: "₹6.5 LPA",
        placement: "72%",
        monthlyEmi: "₹5,600/mo <span class='best-tag'>⭐ Best</span>",
        alumni: "40,000+",
        scholarship: "Up to 15%",
        roi: "4.1x",
        roiTag: "High ROI",
        best: "—"
    },

    {
        name: "IGNOU",
        location: "New Delhi",
        logo: "img/IGNOU_LOGO.png",

        accreditation: "UGC, NAAC A+",
        fee: "0.5 - 1.5 L <span class='best-tag'>⭐ Best</span>",
        emi: "✓ Not Available",

        ranking: "NA",
        salary: "₹3 LPA",
        placement: "60%",
        monthlyEmi: "N/A",
        alumni: "3,00,000+",
        scholarship: "Government Schemes",
        roi: "3x",
        roiTag: "Low ROI",
        best: "—"
    },

    {
        name: "Symbiosis Online",
        location: "Pune, MH",
        logo: "img/Symbiosis_International_University_Logo.png",

        accreditation: "UGC, NAAC A++",
        fee: "1.8 - 2.4 L",
        emi: "✓ No-Cost EMI",

        ranking: "Top 30",
        salary: "₹7 LPA <span class='best-tag'>⭐ Best</span>",
        placement: "88% <span class='best-tag'>⭐ Best</span>",
        monthlyEmi: "₹9,500/mo",
        alumni: "1,20,000+",
        scholarship: "Up to 10%",
        roi: "3.3x <span class='best-tag'>⭐ Best</span>",
        roiTag: "Medium ROI",
        best: "⭐ Recommended For You"
    }

];


/* =========================
ELEMENTS
========================= */

const modalOverlay =
document.getElementById("modalOverlay");

const universityList =
document.getElementById("universityList");

const searchInput =
document.getElementById("searchInput");

const modalClose =
document.getElementById("modalClose");

let currentCard = null;

let selectedUniversities = {
    1: null,
    2: null
};

let isUnlocked = false;


/* =========================
OPEN MODAL
========================= */

document
.querySelectorAll("[data-open]")
.forEach(btn => {

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

    const usedUniversities =
    Object.values(selectedUniversities)
    .filter(Boolean)
    .map(uni => uni.name);

    const filtered =
    universities.filter(uni => {

        const alreadyUsed =
        usedUniversities.includes(uni.name);

        if(currentCard){

            const currentSelected =
            selectedUniversities[currentCard];

            if(currentSelected?.name === uni.name){

                return false;

            }

        }

        return (
            !alreadyUsed &&
            uni.name
            .toLowerCase()
            .includes(search.toLowerCase())
        );

    });

    filtered.forEach(uni => {

        const div =
        document.createElement("div");

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

    document.getElementById(
    `logo${currentCard}`
    ).src = uni.logo;

    document.getElementById(
    `name${currentCard}`
    ).innerText = uni.name;

    const card =
    document.getElementById(
    `card${currentCard}`
    );

    card.querySelector(".empty-state")
    .style.display = "none";

    card.querySelector(".selected-state")
    .style.display = "block";

    card.querySelector(".close-btn")
    .style.display = "flex";

    updateComparison();

    closeModal();

}


/* =========================
ROI CLASS
========================= */

function getRoiClass(tag){

    if(tag.includes("High")){

        return "roi-green";

    }

    if(tag.includes("Medium")){

        return "roi-orange";

    }

    if(tag.includes("Low")){

        return "roi-red";

    }

    return "";

}


/* =========================
UPDATE COMPARISON
========================= */

function updateComparison(){

    const uni1 = selectedUniversities[1];

    const uni2 = selectedUniversities[2];

    if(!uni1 || !uni2){

        document.getElementById(
        "tableLogo1"
        ).style.display = "none";

        document.getElementById(
        "tableLogo2"
        ).style.display = "none";

        document.getElementById(
        "defaultText1"
        ).style.display = "block";

        document.getElementById(
        "defaultText2"
        ).style.display = "block";

        return;

    }


    /* =========================
    LOGOS
    ========================= */

    const logo1 =
    document.getElementById("tableLogo1");

    logo1.src = uni1.logo;

    logo1.style.display = "block";

    document.getElementById(
    "defaultText1"
    ).style.display = "none";


    const logo2 =
    document.getElementById("tableLogo2");

    logo2.src = uni2.logo;

    logo2.style.display = "block";

    document.getElementById(
    "defaultText2"
    ).style.display = "none";


    /* =========================
    HEADER
    ========================= */

    document.getElementById(
    "tableName1"
    ).innerText = uni1.name;

    document.getElementById(
    "tableName2"
    ).innerText = uni2.name;

    document.getElementById(
    "tableLocation1"
    ).innerText = uni1.location;

    document.getElementById(
    "tableLocation2"
    ).innerText = uni2.location;


    /* =========================
    FREE PREVIEW
    ========================= */

    document.getElementById(
    "accreditation1"
    ).innerHTML = uni1.accreditation;

    document.getElementById(
    "accreditation2"
    ).innerHTML = uni2.accreditation;


    document.getElementById(
    "fee1"
    ).innerHTML = uni1.fee;

    document.getElementById(
    "fee2"
    ).innerHTML = uni2.fee;


    document.getElementById(
    "emi1"
    ).innerHTML =
    `<span class="success-pill">
        ${uni1.emi}
    </span>`;


    document.getElementById(
    "emi2"
    ).innerHTML =
    `<span class="success-pill">
        ${uni2.emi}
    </span>`;


    /* =========================
    LOCKED SECTION
    ========================= */

    if(isUnlocked){

        const placement1 =
        parseInt(uni1.placement);

        const placement2 =
        parseInt(uni2.placement);

        const placementColor1 =
        placement1 > placement2
        ? "#16a34a"
        : "#2563eb";

        const placementColor2 =
        placement2 > placement1
        ? "#16a34a"
        : "#2563eb";


        /* RANKING */

        document.getElementById(
        "ranking1"
        ).innerHTML = uni1.ranking;

        document.getElementById(
        "ranking2"
        ).innerHTML = uni2.ranking;


        /* SALARY */

        document.getElementById(
        "salary1"
        ).innerHTML =
        `${uni1.salary}
        <div class="small-text">
            Median
        </div>`;


        document.getElementById(
        "salary2"
        ).innerHTML =
        `${uni2.salary}
        <div class="small-text">
            Median
        </div>`;


        /* PLACEMENT */

        document.getElementById(
        "placement1"
        ).innerHTML =
        `
        <div>
            ${uni1.placement}
        </div>

        <div class="progress-wrap">

            <div
            class="progress-bar-fill"
            style="
            width:${placement1}%;
            background:${placementColor1};
            ">
            </div>

        </div>
        `;


        document.getElementById(
        "placement2"
        ).innerHTML =
        `
        <div>
            ${uni2.placement}
        </div>

        <div class="progress-wrap">

            <div
            class="progress-bar-fill"
            style="
            width:${placement2}%;
            background:${placementColor2};
            ">
            </div>

        </div>
        `;


        /* EMI */

        document.getElementById(
        "monthlyEmi1"
        ).innerHTML =
        `${uni1.monthlyEmi}
        <div class="small-text">
            0% interest
        </div>`;


        document.getElementById(
        "monthlyEmi2"
        ).innerHTML =
        `${uni2.monthlyEmi}
        <div class="small-text">
            0% interest
        </div>`;


        /* ALUMNI */

        document.getElementById(
        "alumni1"
        ).innerHTML = uni1.alumni;

        document.getElementById(
        "alumni2"
        ).innerHTML = uni2.alumni;


        /* SCHOLARSHIP */

        document.getElementById(
        "scholarship1"
        ).innerHTML =
        `
        <span class="success-pill">
            ✓ ${uni1.scholarship}
        </span>
        `;


        document.getElementById(
        "scholarship2"
        ).innerHTML =
        `
        <span class="success-pill">
            ✓ ${uni2.scholarship}
        </span>
        `;


        /* ROI */

        document.getElementById(
        "roi1"
        ).innerHTML = uni1.roi;

        document.getElementById(
        "roi2"
        ).innerHTML = uni2.roi;


        /* ROI TAG */

       // ROI TAG COLORS

function getRoiClass(roiTag){

    if(roiTag.includes("High")){

        return "roi-high";

    }

    else if(roiTag.includes("Medium")){

        return "roi-medium";

    }

    else if(roiTag.includes("Low")){

        return "roi-low";

    }

    return "success-pill";

}


// ROI TAG UPDATE

document.getElementById("roiTag1").innerHTML =
`<span class="${getRoiClass(uni1.roiTag)}">${uni1.roiTag}</span>`;


document.getElementById("roiTag2").innerHTML =
`<span class="${getRoiClass(uni2.roiTag)}">${uni2.roiTag}</span>`;


        /* BEST */

        document.getElementById(
        "best1"
        ).innerHTML = uni1.best;

        document.getElementById(
        "best2"
        ).innerHTML = uni2.best;

    }

}


/* =========================
REMOVE UNIVERSITY
========================= */

document
.querySelectorAll(".close-btn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        const cardNumber =
        btn.dataset.card;

        selectedUniversities[
        cardNumber
        ] = null;

        const card =
        document.getElementById(
        `card${cardNumber}`
        );

        card.querySelector(".empty-state")
        .style.display = "block";

        card.querySelector(".selected-state")
        .style.display = "none";

        btn.style.display = "none";

        updateComparison();

    });

});



/* =========================
UNLOCK MODAL LOGIC
========================= */

const unlockOverlay =
document.getElementById("unlockOverlay");

const unlockClose =
document.getElementById("unlockClose");

const step1 =
document.getElementById("step1");

const step2 =
document.getElementById("step2");

const step1Next =
document.getElementById("step1Next");

const backBtn =
document.getElementById("backBtn");

const unlockSubmit =
document.getElementById("unlockSubmit");

const stepText =
document.getElementById("stepText");

const progressFill =
document.getElementById("progressFill");

const courseButtons =
document.querySelectorAll(".course-btn");

let selectedCourse = "";


/* =========================
OPEN MODAL
========================= */

document
.getElementById("openUnlockModal")
.addEventListener("click", () => {

    unlockOverlay.classList.add("active");

});


/* =========================
CLOSE MODAL
========================= */

function closeUnlockModal(){

    unlockOverlay.classList.remove("active");

}


/* =========================
CROSS BUTTON CLOSE
========================= */

unlockClose.addEventListener("click", () => {

    closeUnlockModal();

});


/* =========================
OUTSIDE CLICK CLOSE
========================= */

unlockOverlay.addEventListener("click", (e) => {

    if(e.target === unlockOverlay){

        closeUnlockModal();

    }

});


/* =========================
COURSE SELECT
========================= */

courseButtons.forEach(button => {

    button.addEventListener("click", () => {

        courseButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        selectedCourse = button.innerText;

    });

});


/* =========================
STEP 1 -> STEP 2
========================= */

step1Next.addEventListener("click", () => {

    if(selectedCourse === ""){

        alert("Please select a course");

        return;

    }

    step1.classList.remove("active");

    step2.classList.add("active");

    stepText.innerText = "Step 2 of 2";

    progressFill.style.width = "100%";

});


/* =========================
BACK BUTTON
========================= */

backBtn.addEventListener("click", () => {

    step2.classList.remove("active");

    step1.classList.add("active");

    stepText.innerText = "Step 1 of 2";

    progressFill.style.width = "50%";

});


/* =========================
FINAL UNLOCK
========================= */

unlockSubmit.addEventListener("click", () => {

    const name =
    document.getElementById("userName").value.trim();

    const email =
    document.getElementById("userEmail").value.trim();

    const phone =
    document.getElementById("userPhone").value.trim();


    if(
        name === "" ||
        email === "" ||
        phone === ""
    ){

        alert("Please fill all details");

        return;

    }


    /* REAL UNLOCK */

    isUnlocked = true;

    document.querySelector(
    ".overlay-box"
    ).style.display = "none";

    document.querySelector(
    ".locked-section"
    ).classList.add("unlocked");

    closeUnlockModal();

    updateComparison();

});