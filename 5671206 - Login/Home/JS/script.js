// --- Hamburger Menu ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


document.querySelectorAll(".nav-menu li a:not(.dropbtn)").forEach(n => {
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

const dropdownBtns = document.querySelectorAll('.dropbtn');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            e.preventDefault(); 
            
            const dropdownContent = this.nextElementSibling;
            
            dropdownContent.classList.toggle('show');
            
            const icon = this.querySelector('.fa-angle-right');
            if (icon) {
                icon.style.transform = dropdownContent.classList.contains('show') ? 'rotate(90deg)' : 'rotate(0deg)';
            }
        }
    });
});

// --- Update ---
function closePopup() {
    const popup = document.getElementById('updatePopup');
    popup.classList.remove('show');
}

window.addEventListener('load', () => {
    setTimeout(() => {
        const popup = document.getElementById('updatePopup');
        if (popup) {
            popup.classList.add('show');
        }
    }, 1500); 
});

// --- Lenis Smooth Scroll Initialization ---
const lenis = new Lenis({
    duration: 1.2, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);