// ====================================================================
// Fichier      : main.js
// Description  : Gestion des interactions, de la navigation et des animations du portfolio
// ====================================================================

// ====================================================================
// TABLE DES MATIÈRES
// ====================================================================
//
// 0. IMPORTATION DES DONNÉES
// 1. Configuration des effets visuels (Particles.js)
// 2. Sélection des éléments du DOM & variables globales
// 3. Écouteurs d'événements (Event Listeners)
// 4. Fonctions
// 5. Animations (GSAP)
//
// ====================================================================

// --------------------------------------------------------------------
// 0. IMPORTATION DES DONNÉES
// --------------------------------------------------------------------

import { isDataLoaded } from "./data.js";
await isDataLoaded; // Assure que les données sont chargées avant d'exécuter le reste du code

// --------------------------------------------------------------------
// 1. CHARGEMENT DES EFFETS VISUELSQ (PARTICLES.JS)
// --------------------------------------------------------------------

particlesJS.load("particles-js", "src/data/particle.json");

// --------------------------------------------------------------------
// 2. SÉLECTION DES ÉLÉMENTS DU DOM & VARIABLES GLOBALES
// --------------------------------------------------------------------

// Conteneurs principaux de contenu
const mainContent = document.querySelector(".content-frame");
const projectContent = document.querySelector(".content-frame-project");

// Boutons de navigation (Accueil et Projets)
const accueilButton = document.getElementById("accueil");
const qryptaProjectButton = document.getElementById("qrypta");
const scootexProjectButton = document.getElementById("scootex");
const cs2ProjectButton = document.getElementById("cs2");
const veyloriaProjectButton = document.getElementById("veyloria");

// Tableau regroupant l'ensemble des boutons de navigation pour une gestion facilitée
const buttons = [
  accueilButton,
  qryptaProjectButton,
  scootexProjectButton,
  cs2ProjectButton,
  veyloriaProjectButton,
];


// Modal 
const modal = document.getElementById("modalProject");
const closeModalButton = document.querySelector(".close");
const openModalButtons = document.querySelectorAll(".modalButton");

// --------------------------------------------------------------------
// 3. ÉCOUTEURS D'ÉVÉNEMENTS (EVENT LISTENERS)
// --------------------------------------------------------------------

accueilButton.addEventListener("click", hideProject);
qryptaProjectButton.addEventListener("click", showProject);
scootexProjectButton.addEventListener("click", showProject);
cs2ProjectButton.addEventListener("click", showProject);
veyloriaProjectButton.addEventListener("click", showProject);
projectContent.addEventListener("click", switchImage);
closeModalButton.addEventListener("click", closeModal);
openModalButtons.forEach((modalbutton) => {
  modalbutton.addEventListener("click", openModal);
});


// --------------------------------------------------------------------
// 4. FONCTIONS
// --------------------------------------------------------------------

/**
 * Fonction pour afficher le projet sélectionné et masquer les autres
 */
function showProject(e) {
  e.preventDefault();

  const projectId = e.currentTarget.id;
  const targetProject = document.getElementById(`project-${projectId}`);
  const allProjectElements = document.querySelectorAll(
    ".single-project-container",
  );

  // Basculement de l'affichage des conteneurs principaux
  mainContent.style.display = "none";
  projectContent.style.display = "flex";
  modal.style.display = "none"; // Assure que le modal est fermé lors de l'affichage d'un projet

  // Mise à jour visuelle de l'état actif des boutons de navigation
  buttons.forEach((button) => button.classList.remove("active"));
  e.currentTarget.classList.add("active");

  // Masquage de tous les projets avant d'afficher le bon
  allProjectElements.forEach((el) => (el.style.display = "none"));

  // Affichage du projet cible ou journalisation d'une erreur si introuvable
  if (targetProject) {
    targetProject.style.display = "flex";

    // Animation des éléments du projet après son affichage
    animateProject(targetProject);
  } else {
    console.error(`Aucun projet trouvé avec l'ID : ${projectId}`);
  }

  console.log("PROJET SÉLECTIONNÉ : " + projectId);
}

/**
 * Anime les éléments du projet après son affichage
 */
function animateProject(project) {
  const projectElements = project.querySelectorAll(
    ".project-header > *, .project-carousel, .project-actions, .project-details > .details-block",
  );
  const technologyBadges = project.querySelectorAll(".badge-tech");

  // Assure que toutes les animations précédentes sont arrêtées avant de commencer de nouvelles animations
  gsap.killTweensOf(projectElements);
  gsap.killTweensOf(technologyBadges);

  // Animation des éléments du projet avec GSAP
  gsap.timeline()
    .from(projectElements, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      clearProps: "transform,opacity",
    })
    .from(
      technologyBadges,
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.35,
        ease: "back.out(1.7)",
        stagger: 0.08,
        clearProps: "transform,opacity",
      },
      "-=0.25",
    );
}

function animateModal() {
  const modalContent = modal.querySelector(".modal-content");
  const modalElements = modalContent.querySelectorAll(
    ".process-header > *, .process-step, .process-footer",
  );

  // Assure que toutes les animations précédentes sont arrêtées avant de commencer de nouvelles animations
  gsap.killTweensOf(modalContent);
  gsap.killTweensOf(modalElements);

  // Animation des éléments du modal avec GSAP
  gsap.timeline()
    .from(modalContent, {
      opacity: 0,
      scale: 0.95,
      duration: 0.35,
      ease: "power2.out",
      clearProps: "transform,opacity",
    })
    .from(modalElements, {
      opacity: 0,
      y: 24,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.08,
      clearProps: "transform,opacity",
    }, "-=0.15");
}

/**
 * Fonction pour masquer les projets et afficher la vue d'accueil
 */
function hideProject(e) {
  e.preventDefault();

  // Restauration de l'affichage de la vue d'accueil
  mainContent.style.display = "flex";
  projectContent.style.display = "none";
  modal.style.display = "none";

  // Réinitialisation de l'état actif des boutons
  buttons.forEach((button) => button.classList.remove("active"));
  e.currentTarget.classList.add("active");

  console.log("RETOUR À L'ACCUEIL");
}

/**
 * Fonction de bascule d'image
 */
function switchImage(e) {
  // Vérification si l'élément cliqué est un point de navigation du carrousel
  const dot = e.target.closest(".carousel-dots .dot");
  if (!dot) return;

  // Récupération du carrousel parent et des éléments associés
  const carousel = dot.closest(".project-carousel");
  const dots = Array.from(carousel.querySelectorAll(".carousel-dots .dot"));
  const slides = carousel.querySelectorAll(".carousel-slide");
  const index = dots.indexOf(dot);

  // Mise à jour de l'état actif des points et des images du carrousel
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });

  // Mise à jour de l'état actif des images du carrousel
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === index);
    s.classList.toggle("inactive", i !== index);
  });

  // Cousole log pour indiquer quelle image a été sélectionnée
  console.log(`Image ${index + 1} sélectionnée`);

}

// Fonctions pour ouvrir et fermer le modal
function openModal() {
  modal.style.display = "flex";
  animateModal();
  console.log("Modal ouvert");
}

function closeModal() {
  modal.style.display = "none";
  console.log("Modal fermé");
}

// Fermer le modal lorsque l'utilisateur clique en dehors de celui-ci
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};


// --------------------------------------------------------------------
// 5. ANIMATIONS (GSAP)
// --------------------------------------------------------------------


// Animation des barres de compétences : elles apparaissent progressivement de gauche à droite.
gsap.from(".fill", {
  duration: 0.85,
  scaleX: 0,
  transformOrigin: "left",
  ease: "power2.inOut",
  stagger: 0.15,
});

// Animation machine à écrire pour le titre principal 
gsap.to(".main-title", {
  text: { value: "Zackary Warren." },
  duration: 1.5,
  ease: "none",
});

// Animation machine à écrire pour la description principale
gsap.to(".description", {
  text: { value: "Bonjour ! Je m'appelle Zackary Warren. Finissant en intégration multimédia au Collège Montmorency, je conçois et façonne des expériences numériques interactives pour le web de demain." },
  duration: 2.5,
  ease: "none",
});

// Animation de texte avec effet "Matrix" pour le statut de disponibilité
gsap.to(".matrix", {
  scrambleText: {
    text: "Disponible pour stage (3 mois)",
    chars: "ﾊﾐﾋｰｳｼﾅﾓﾆｻ012345789",
    speed: 0.3
  },
  duration: 2
});

// Animation de compteur numérique pour un effet
gsap.to(".pct-html", {
  innerText: 75 + "%", duration: 0.85,
  ease: "steps(12)",
  snap: {
    innerText: 5
  }
});

gsap.to(".pct-css", {
  innerText: 75 + "%", duration: 0.85,
  ease: "steps(12)",
  snap: {
    innerText: 5
  }
});

gsap.to(".pct-js", {
  innerText: 60 + "%", duration: 0.85,
  ease: "power1.out",
  snap: {
    innerText: 5
  }
});

gsap.to(".pct-github", {
  innerText: 65 + "%", duration: 0.85,
  ease: "power1.out",
  snap: {
    innerText: 5
  }
});

gsap.to(".pct-cms", {
  innerText: 75 + "%", duration: 0.85,
  ease: "power1.out",
  snap: {
    innerText: 5
  }
});

gsap.to(".pct-cpp", {
  innerText: 5 + "%", duration: 0.85,
  ease: "power1.out",
  snap: {
    innerText: 5
  }
});
