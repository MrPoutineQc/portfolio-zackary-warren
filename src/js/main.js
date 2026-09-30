// LOAD LES PARTICULES
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


// LOADING
// async function loadProjects() {
//     const response = await fetch('data/projects.json');
//     const projects = await response.json();
//     return projects;
// }

// async function init() {
//     const projects = await loadProjects();
//     console.table(projects);


//     projects.forEach((project) => {
//         projectContent.insertAdjacentHTML('beforeend', `<article class="project-card">
//     <img class="project-card__image" src="${project.image}" alt="...">
//     <div class="project-card__content">
//     <h3 class="project-card__title">${project.title}</h3>
//     <p class="project-card__meta">${project.category} · ${project.year}</p>
//     <p class="project-card__description">${project.description}</p>
//     </div>
//     </article>`);
//     });


//     function createProjectCard(project) {
//         return
//     }
// }

// init();