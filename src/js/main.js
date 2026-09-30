// --------------------------------------------------------------------
// Fichier : main.js
// Description : Gestion des interactions du portfolio
// ------------------------------------------------------------------------------

// ---- PARTICLES.JS ---- //
particlesJS.load(
    'particles-js',
    'src/data/particle.json',
);

// ---- VARIABLES ---- // 
const mainContent = document.querySelector(".content-frame");
const projectContent = document.querySelector(".content-frame-project");

const accueilButton = document.getElementById("accueil");
const qryptaProjectButton = document.getElementById("qrypta");
const scootexProjectButton = document.getElementById("scootex");
const cs2ProjectButton = document.getElementById("cs2");
const veyloriaProjectButton = document.getElementById("veyloria");

const buttons = [accueilButton, qryptaProjectButton, scootexProjectButton, cs2ProjectButton, veyloriaProjectButton];

// ---- ÉVÉNEMENTS ---- //
accueilButton.addEventListener("click", hideProject);
qryptaProjectButton.addEventListener("click", showProject);
scootexProjectButton.addEventListener("click", showProject);
cs2ProjectButton.addEventListener("click", showProject);
veyloriaProjectButton.addEventListener("click", showProject);


// ---- FONCTIONS ---- //
function showProject(e) {
    mainContent.style.display = "none";
    projectContent.style.display = "flex";

    buttons.forEach(button => button.classList.remove("active"));
    e.target.closest("a").classList.add("active");


    console.log("ÇA MARCHE");
}

function hideProject(e) {
    mainContent.style.display = "flex";
    projectContent.style.display = "none";

    buttons.forEach(button => button.classList.remove("active"));
    e.target.closest("a").classList.add("active");

    console.log("ÇA MARCHE");
}


