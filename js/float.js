const floatHTML = `

    <div class="floating-container">

        <!-- CALL BUTTON -->
        <a
        href="tel:+919950000686"
        class="float-btn call-btn"
        aria-label="Call Now"
        >
            <i class="fa-solid fa-phone"></i>
        </a>

        <!-- WHATSAPP BUTTON -->
        <a
        href="https://wa.me/919950000686"
        target="_blank"
        class="float-btn whatsapp-btn"
        aria-label="Chat on WhatsApp"
        >
            <i class="fa-brands fa-whatsapp"></i>
        </a>

    </div>

`;

/* =========================
ADD FLOAT BUTTON
========================= */

document.getElementById(
    "ss-float-placeholder"
).innerHTML = floatHTML;