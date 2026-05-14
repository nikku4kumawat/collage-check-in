/* =========================
UNLOCK MODAL LOGIC
========================= */

const openUnlockModal =
document.getElementById("openUnlockModal");

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

const progressFill =
document.getElementById("progressFill");

const stepText =
document.getElementById("stepText");

/* OPEN MODAL */

openUnlockModal.addEventListener("click", () => {

    unlockOverlay.classList.add("active");

});

/* CLOSE BUTTON */

unlockClose.addEventListener("click", () => {

    unlockOverlay.classList.remove("active");

});

/* OUTSIDE CLICK CLOSE */

unlockOverlay.addEventListener("click", (e) => {

    if(e.target === unlockOverlay){

        unlockOverlay.classList.remove("active");

    }

});

/* COURSE SELECT */

const courseBtns =
document.querySelectorAll(".course-btn");

let selectedCourse = "";

courseBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        courseBtns.forEach((b) => {
            b.classList.remove("active");
        });

        btn.classList.add("active");

        selectedCourse = btn.innerText;

    });

});

/* STEP 1 -> STEP 2 */

step1Next.addEventListener("click", () => {

    if(selectedCourse === ""){

        alert("Please select a course");

        return;
    }

    step1.classList.remove("active");

    step2.classList.add("active");

    progressFill.style.width = "100%";

    stepText.innerText = "Step 2 of 2";

});

/* BACK BUTTON */

backBtn.addEventListener("click", () => {

    step2.classList.remove("active");

    step1.classList.add("active");

    progressFill.style.width = "50%";

    stepText.innerText = "Step 1 of 2";

});




/* FINAL UNLOCK */

const unlockSubmit =
document.getElementById("unlockSubmit");

const lockedSection =
document.querySelector(".locked-section");

unlockSubmit.addEventListener("click", () => {

    const name =
    document.getElementById("userName").value.trim();

    const email =
    document.getElementById("userEmail").value.trim();

    const phone =
    document.getElementById("userPhone").value.trim();

    /* EMPTY CHECK */

    if(!name || !email || !phone){

        alert("Please fill all details");

        return;
    }

    /* CLOSE MODAL */

    unlockOverlay.classList.remove("active");

    /* UNLOCK CONTENT */

    lockedSection.classList.add("unlocked");

});