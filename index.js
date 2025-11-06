document.querySelectorAll(".list-icon ul li a").forEach(li => {
    li.addEventListener("click", e => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });
    });
});

window.onscroll = () => {
    scrollNav(document.querySelector(".home"), document.getElementById("home-nav"));
    scrollNav(document.querySelector(".about"), document.getElementById("about-nav"));
    scrollNav(document.querySelector(".skills"), document.getElementById("skills-nav"));
    scrollNav(document.querySelector(".services"), document.getElementById("service-nav"));
    scrollNav(document.querySelector(".portfolio"), document.getElementById("portfolio-nav"));
    scrollNav(document.querySelector(".contact"), document.getElementById("contact-nav"));

};

function scrollNav(ev, el) {
    if (window.scrollY >= ev.offsetTop - 200) {
        document.querySelectorAll(".list-icon ul li a").forEach(e => {
            e.classList.remove("active");
            el.classList.add("active");
        })
    };
};