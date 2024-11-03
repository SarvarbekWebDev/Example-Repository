// Sections

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    const scrollElement = document.getElementById("scrollHome");
    const header = document.getElementById('header');
    if(document.documentElement.scrollTop > 100){
        scrollElement.classList.add("moveToHome");
        header.classList.add('sticky');
    }else{
        scrollElement.classList.remove("moveToHome");
        header.classList.remove('sticky');
    }

    // sections
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id +  ']').classList.add('active');
            });
        }
    });
};

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
navbar.style.right = '-250px';

function showNavbar() {
    if(navbar.style.right == "-250px"){
        navbar.style.right = "0"
        menuIcon.classList.remove("bx-menu");
        menuIcon.classList.add("bx-x")
    }else{
        navbar.style.right = "-250px";
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu")
    }
};

// ---------------Scroll Reveal -----------
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: '2000',
    delay: '200'
    });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed js

var typed = new Typed('#autoType', {
    strings: ['YouTuber', 'Content Creator', 'Web Developer'],
    typeSpeed: 250,
    loop: true,
  });

  let date = new Date();
  let currentYear = date.getFullYear();

  document.getElementById("currentYear").innerHTML = currentYear;
  document.querySelector("input").autocomplete = "off";

const themeChanger = document.getElementById("modeElement");

function changeTheme() {
    const images = document.querySelectorAll(".imgs");
    const themeChanger = document.getElementById("modeElement");

    if (themeChanger.classList.contains("bxs-sun")) {
        themeChanger.classList.remove("bxs-sun");
        themeChanger.classList.add("bxs-moon");

        for(let i = 0; i < images.length; i++) {
            if(images[i].src.includes("logo.png")) {
                images[i].src = "Images/lightlogo.png";
            }
        }

        document.documentElement.style.setProperty("--bg-color", "#fff");
        document.documentElement.style.setProperty("--second-bg-color", "#ebedec");
        document.documentElement.style.setProperty("--text-color", "#000");
        document.documentElement.style.setProperty("--main-color", "#664DCD");

        localStorage.setItem("colors", "bxs-moon|#fff|#ebedec|#000|#664DCD|Images/lightlogo.png");
    } else {
        themeChanger.classList.remove("bxs-moon");
        themeChanger.classList.add("bxs-sun");

        for(let i = 0; i < images.length; i++) {
            if(images[i].src.includes("lightlogo.png")) {
                images[i].src = "Images/logo.png";
            }
        }

        document.documentElement.style.setProperty("--bg-color", "#1f242d");
        document.documentElement.style.setProperty("--second-bg-color", "#323946");
        document.documentElement.style.setProperty("--text-color", "#fff");
        document.documentElement.style.setProperty("--main-color", "#0ef");

        localStorage.setItem("colors", "bxs-sun|#1f242d|#323946|#fff|#0ef|Images/logo.png");
    }
}

function loadTheme() {
    const colorsAfterLoad = localStorage.getItem("colors");

    if (colorsAfterLoad) {
        const [icon, bgColor, secondBgColor, textColor, mainColor, logoSrc] = colorsAfterLoad.split("|");
        const themeChanger = document.querySelector("#modeElement");
        const images = document.querySelectorAll(".imgs");

        if (themeChanger) {
            themeChanger.classList.remove("bxs-sun", "bxs-moon");
            themeChanger.classList.add(icon);

            document.documentElement.style.setProperty("--bg-color", bgColor);
            document.documentElement.style.setProperty("--second-bg-color", secondBgColor);
            document.documentElement.style.setProperty("--text-color", textColor);
            document.documentElement.style.setProperty("--main-color", mainColor);

            for(let i = 0; i < images.length; i++) {
                images[i].src = logoSrc;
            }
        }
    }
}

window.addEventListener("load", loadTheme);

document.addEventListener("DOMContentLoaded", function() {
    const themeChangerButton = document.querySelector("#modeElement");
    themeChangerButton.addEventListener("click", changeTheme);
});
