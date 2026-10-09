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

// --------------------------------------------------------------------
// 3. ÉCOUTEURS D'ÉVÉNEMENTS (EVENT LISTENERS)
// --------------------------------------------------------------------

accueilButton.addEventListener("click", hideProject);
qryptaProjectButton.addEventListener("click", showProject);
scootexProjectButton.addEventListener("click", showProject);
cs2ProjectButton.addEventListener("click", showProject);
veyloriaProjectButton.addEventListener("click", showProject);
projectContent.addEventListener("click", switchImage);


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

  // Mise à jour visuelle de l'état actif des boutons de navigation
  buttons.forEach((button) => button.classList.remove("active"));
  e.currentTarget.classList.add("active");

  // Masquage de tous les projets avant d'afficher le bon
  allProjectElements.forEach((el) => (el.style.display = "none"));

  // Affichage du projet cible ou journalisation d'une erreur si introuvable
  if (targetProject) {
    targetProject.style.display = "flex";
  } else {
    console.error(`Aucun projet trouvé avec l'ID : ${projectId}`);
  }

  console.log("PROJET SÉLECTIONNÉ : " + projectId);
}

/**
 * Fonction pour masquer les projets et afficher la vue d'accueil
 */
function hideProject(e) {
  e.preventDefault();

  // Restauration de l'affichage de la vue d'accueil
  mainContent.style.display = "flex";
  projectContent.style.display = "none";

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