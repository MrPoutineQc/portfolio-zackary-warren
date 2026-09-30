// ------------------------------------------------------------------------------
// Fichier : data.js
// Description : Gestion des données du portfolio
// ------------------------------------------------------------------------------
async function loadProjects() {
  const response = await fetch('/src/data/projects.json');
  const projects = await response.json();
  return projects;
}

async function init() {
  const projects = await loadProjects();
  console.table(projects);

  projects.forEach((project) => {
    projectContent.insertAdjacentHTML('beforeend', createProjectCard(project));
  });

}

function createProjectCard(project) {
  const projectImages = Array.isArray(project.image)
    ? project.image
    : [project.image, project.image, project.image];
  const projectTech = Array.isArray(project.tech) ? project.tech : [];

  return `
    <!-- Colonne Gauche : Aperçu & Actions -->
    <div class="single-project-container" id="project-${project.id}">
      <section class="project-preview">
        <!-- En-tête du projet -->
        <header class="project-header">
          <h1 class="main-title-project">
            <span class="project-number">${project.number}</span>
            <span class="project-name">${project.title}</span>
          </h1>
          <p class="description-project">${project.summary}</p>
        </header>

        <!-- Carrousel d'aperçus -->
        <div class="project-carousel">
          <div class="carousel-viewport">
            <ul class="carousel-track">
              <li class="carousel-slide active">
                <img src="${projectImages[0] || ""}" alt="" />
              </li>

              <li class="carousel-slide 2 inactive">
                <img src="${projectImages[1] || projectImages[0] || ""}" alt="" />
              </li>

              <li class="carousel-slide 3 inactive">
                <img src="${projectImages[2] || projectImages[0] || ""}" alt="" />
              </li>
            </ul>
          </div>

          <!-- Indicateurs de pagination (les 3 points sous l'image) -->
          <div class="carousel-dots" role="tablist" aria-label="Navigation des captures">
            <button class="dot primary active" role="tab" aria-selected="true" aria-label="Image 1"></button>
            <button class="dot secondary" role="tab" aria-selected="false" aria-label="Image 2"></button>
            <button class="dot tertiary" role="tab" aria-selected="false" aria-label="Image 3"></button>
          </div>
        </div>

        <!-- Boutons -->
        <div class="project-actions">
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-eye-fill" viewBox="0 0 16 16">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
            </svg>
            <span>Voir le site</span>
          </a>

          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-github" viewBox="0 0 16 16">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            <span>Github</span>
          </a>

          <button type="button" class="btn btn-secondary" aria-haspopup="dialog">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-info-circle-fill" viewBox="0 0 16 16">
              <path
                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
            </svg>
            <span>En savoir plus</span>
          </button>
        </div>
      </section>

      <!-- Colonne Droite : Détails & Stacks -->
      <aside class="project-details">
        <!-- Section Description -->
        <div class="details-block">
          <h2 class="details-heading">Description</h2>
          <p class="details-text">${project.description}</p>
        </div>

        <!-- Section Technologies -->
        <div class="details-block">
          <h2 class="details-heading">Technologie utilisés</h2>
          <div class="tech-stack-badges">
            <div class="badge-tech" title="">
              <img class="tech-icons" src="${project.tech[0] || ""}" alt="allo" />
            </div>
            <div class="badge-tech" title="">
              <img class="tech-icons" src="${projectTech[1] || projectTech[0] || ""}" alt="" />
            </div>

            <div class="badge-tech" title="">
              <img class="tech-icons" src="${projectTech[2] || projectTech[0] || ""}" alt="" />
            </div>
          </div>
        </div>
      </aside>
    </div>
  `;
}

init();

