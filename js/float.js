document.addEventListener("DOMContentLoaded", function() {
    const floatHTML = `
    <div class="ss-float-container">
        <a href="https://wa.me/9950000686 " target="_blank" class="ss-float-btn ss-whatsapp">
            <i class="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
        </a>
    </div>`;

    // Yahan humne specific ID ko pakda hai
    const placeholder = document.getElementById('ss-float-placeholder');
    if(placeholder) {
        placeholder.innerHTML = floatHTML;
    }
});