// back to top Btn js 
const backToTopBtn = document.querySelector('.backToTopBtn');
window.addEventListener("scroll",() =>{
    if(window.pageYOffset > 250){
        backToTopBtn.classList.remove("hidden")
    } else{
        backToTopBtn.classList.add("hidden")
    }
});
backToTopBtn.addEventListener("click", () =>{
    window.scrollTo({
        top:0,
        behavior: "smooth"        
    });
});

// Smooth scroll on click
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Swiper.js //
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,  
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    }

});

gsap.registerPlugin(ScrollTrigger);

let sections = document.querySelectorAll("section");
sections.forEach((sec) => {
    ScrollTrigger.create({
        trigger: sec,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(sec.id),
        onEnterBack: () => setActive(sec.id),
    });
});

function setActive(id) {
    document.querySelectorAll('.navbar-center a').forEach(navLink => {
        navLink.classList.remove('bg-neutral');
        navLink.classList.remove('text-neutral-content');
    });
    const activeLink = document.querySelector(`.navbar-center a[href="#${id}"]`);
    if (activeLink) {
        activeLink.classList.add('bg-neutral');
        activeLink.classList.add('text-neutral-content');
    }

    document.querySelectorAll('.navbar-start a').forEach(mblNavLink => {
        mblNavLink.classList.remove('bg-neutral');
        mblNavLink.classList.remove('text-neutral-content');
    });
    const mblActiveLink = document.querySelector(`.navbar-start a[href="#${id}"]`);
    if (mblActiveLink) {
        mblActiveLink.classList.add('bg-neutral');
        mblActiveLink.classList.add('text-neutral-content');
    }
}