// --------------------------------------------------------------------
// Fichier : main.js
// Description : Gestion des interactions du portfolio
// --------------------------------------------------------------------

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
const carouselDot = document.querySelectorAll(".dot");

const buttons = [accueilButton, qryptaProjectButton, scootexProjectButton, cs2ProjectButton, veyloriaProjectButton];

// ---- ÉVÉNEMENTS ---- //
accueilButton.addEventListener("click", hideProject);
qryptaProjectButton.addEventListener("click", showProject);
scootexProjectButton.addEventListener("click", showProject);
cs2ProjectButton.addEventListener("click", showProject);
veyloriaProjectButton.addEventListener("click", showProject);
carouselDot.addEventListener("click", switchImage);


// ---- FONCTIONS ---- //

// Afficher le projet sélectionné
function showProject(e) {

    e.preventDefault();

    // Récupérer l'ID du projet à partir du bouton cliqué et afficher le projet correspondant
    const projectId = e.currentTarget.id;
    const targetProject = document.getElementById(`project-${projectId}`);
    const allProjectElements = document.querySelectorAll(".single-project-container");

    mainContent.style.display = "none";
    projectContent.style.display = "flex";

    // Mettre à jour l'état actif des boutons
    buttons.forEach(button => button.classList.remove("active"));
    e.currentTarget.classList.add("active");

    allProjectElements.forEach((el) => el.style.display = "none");

    // Afficher uniquement le projet correspondant à l'ID
    if (targetProject) {
        targetProject.style.display = "flex";
    } else {
        console.error(`Aucun projet trouvé avec l'ID : ${projectId}`);
    }

    console.log("PROJET SÉLECTIONNÉ : " + projectId);
}

// Masquer le projet et revenir à l'accueil
function hideProject(e) {
    e.preventDefault();

    mainContent.style.display = "flex";
    projectContent.style.display = "none";

    // Mettre à jour l'état actif des boutons
    buttons.forEach(button => button.classList.remove("active"));
    e.currentTarget.classList.add("active");

    console.log("RETOUR À L'ACCUEIL");
}

function switchImage() {
    if (clickedDot.classList.contains("primary")) {
        
    } else if (clickedDot.classList.contains("secondary")) {

    } else if (clickedDot.classList.contains("tertiary")) {
    }
}


// ---- ANIMATIONS GSAP --- //