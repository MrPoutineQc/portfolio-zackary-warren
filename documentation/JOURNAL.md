# Design

## 1. Génération du design

- **Date :** Septembre 2026
- **Outil :** Google Stitch
- **Prompt :**
  - _Prompt #1 :_ À l'aide de mon identité visuelle et de mon identité professionnelle, fais-moi 3 designs de portfolio.
  - _Prompt #2 :_ Inspire-toi de ces portfolios avec le glassmorphism, mais garde mon identité visuelle sans rien rajouter.
- **Résultat :** Google Stitch a généré pratiquement ce que je voulais. J'ai cependant modifié certains éléments visuels et certains textes afin de mieux correspondre à mon concept.

## 2. Avancement de la maquette

- **Date :** 12 septembre 2026
- **Outil :** Figma
- **Résultat :** J'ai finalisé la maquette de mon portfolio pour les versions ordinateur et mobile. Il me manque simplement de designer la page d'un projets.

1. Qu'est-ce que j'ai accompli depuis le dernier bloc?

- J'ai pratiquement finalisé le design de mon portfolio

2. Quelle a été ma principale difficulté et comment je l'ai surmontée?

- Je pense que ma principale difficulté était d'adapter mon design à la version mobile.

3. Qu'est-ce que j'ai appris que je ne savais pas avant?

- J'ai appris à mieux visualiser une structure hiérarchique des différents éléments.

4. Quelle est ma prochaine étape concrète?

- Commencer le développement du portfolio.

5. Est-ce que j'ai utilisé l'IA? Si oui, pour quoi et qu'est-ce que ça m'a appris?

- J'ai aidé l'IA pour m'aider à visualiser l'idée de portfolio que j'avais en tête. J'ai appris qu'il fallait être très précis lorsque l'on a une idée précise.

# Développement

## 1. Écriture du HTML

- **Date :** 22 Septembre 2026
- **Outil :** Gemini x VsCode
- **Prompt :**
  - _Prompt #1 :_ Est-ce que mon html correspond a mon design si non qu'est-ce qu'il a modifier et améliorer ? .
- **Résultat :** Gemini à dit « La structure globale est une excellente base, mais plusieurs éléments sémantiques, hiérarchiques et visuels ne correspondent pas fidèlement à la maquette. » Il m'a ensuite renvoyer le code avec les corrections.

## 2. Écriture du HTML

- **Date :** 23 Septembre 2026
- **Outil :** Copilot x VsCode
- **Prompt :**
  - _Prompt #1 :_ Pourrais tu supprimer les classes tailwind ainsi que le CDN et transféré le responsive au sein du dossier navbar.css .
- **Résultat :** Gemini m'a fait un résultat pas très convaincant, alors j'ai décidé de prendre son code et de l'envoyer vers Claude.

- **Date :** 23 Septembre 2026
- **Outil :** Claude x VsCode
- **Prompt :**
  - _Prompt #1 :_ Voici le code de ma navbar il y a beaucoup d'erreur fix pour qu'elle ressemble a mon design (J'ai joint des images de mon design origine).
- **Résultat :** Claude a très bien réussi la tâche, son code est beaucoup plus clair et lisible que Copilot. Je peux maintenant rajouter les dernières touches finales sans me perdre dans le code.

- **Date :** 24 Septembre 2026
- **Outil :** Claude x VsCode
- **Prompt :**
  - _Prompt #1 :_ Donne moi la structure seulement (grid, padding etc) du skills je vais la styliser après.
- **Résultat :** Il m'a donné la structure du CSS pour sauver du temps ce qui ma permis de me concentrer directement sur le style.

- **Date :** 24 Septembre 2026
- **Outil :** Claude x VsCode
- **Prompt :**
  - _Prompt #1 :_ Donnne le code du layout pas du style. (HTML et photo de mon design en fichier joint)
- **Résultat :** Il m'a donné la structure du CSS de mes « skills » pour sauver du temps ce qui ma permis de me concentrer directement sur le style.

- **Date :** 29 Septembre 2026
- **Outil :** Claude x VsCode
- **Prompt :**
  - _Prompt #1 :_ Pourquoi mes dots apparaissent écrasé. (CSS/HTML en fichier joint)
- **Résultat :** Il m'a donné donné les corrections nécessaires qui causait le problème.

- **Date :** 30 Septembre 2026
- **Outil :** Copilot x VsCode
- **Prompt :**
  - _Prompt #1 :_ Pourquoi mes projets ne s'affichent-ils indépendamment selon le bouton sélectionné ? Analyse mon HTML, CSS et JavaScript pour m'aider à identifier la cause. En effet, mes différents projets s'affichent avec display:flex. et display:none pour les cacher. Alors, quand je suis à l'accueil et que je veux afficher le projet Veyloria, alors il devient display flex le contenu, mais uniquement l'id Veyloria est affiché (CSS/HTML en fichier joint)
- **Résultat :** Il m'a donné donné les corrections nécessaires qui causait le problème.

- **Date :** 1 octobre 2026
- **Outil :** Claude x VsCode
- **Prompt :**
  - _Prompt #1 :_ Trouve-moi l'erreur qui m'empêche d'exécuter la fonction switchimage (HTML/JS en fichier joint)
- **Résultat :** J'avais fait une partie du code, cependant elle ne fonctionnait pas comme je le voulais. Alors je lui ai demandé ce qui causait l'erreur et il m'a corrigé tout en m'expliquant


## Bloc 2 : intégration et données.

1. Qu'est-ce que j'ai accompli depuis le dernier bloc? (Vous pouvez faire référence à vos commits.)
  - J'ai incorporé les données dynamiques au site web et pratiquement finalisé le style principal.
2. Quelle a été ma principale difficulté et comment je l'ai surmontée?
  - Faire afficher les différents projets en display:block et display:none en appuyant sur le bouton dans la nav en question qui représente le projet sélectionné. J'ai demandé un coup de pouce à l'IA pour pouvoir m'aider sur cet aspect que je n'avais jamais fait avant.
3. Qu'est-ce que j'ai appris que je ne savais pas avant?
  - Je crois avoir mieux saisi le chargement asynchrone des données, malgré que je ne serais sûrement pas capable encore de reproduire de 0 et qu'il faudrait que je fasse davantage.
4. Quelle est ma prochaine étape concrète?
 - Faire le responsive (Cellulaire, Tablette, Grand écran) du site complet. 
5. Est-ce que j'ai utilisé l'IA? Si oui, pour quoi et qu'est-ce que ça m'a appris?
 - J'ai utilisé l'IA pour corriger les erreurs que je n'arrivais pas à diagnostiquer, j'ai pu comprendre avec lui mes erreurs et comment les éviter.

- **Date :** 12 octobre 2026
- **Outil :** Copilot x VsCode
- **Prompt :**
  - _Prompt #1 :_ Comment je pourrais animer tous les éléments d'un projet lorsqu'il est affiché uniquement, j'ai une petite idée en créant une fonction qui se déclenche lorsqu'on clique sur un l'un des projets.
- **Résultat :** Il m'a effectivement créé une fonction qui déclenche les animations directement après ma fonction `showProject`.


- **Date :** 14 octobre 2026
- **Outil :** Copilot x VsCode
- **Prompt :**
  - _Prompt #1 :_ Mets mon modalProject dans le data.js pour qu'il se charge comme le reste et mets les bonnes variables qui se trouvent dans projects.json
- **Résultat :** Il m'a créé une nouvelle variable dans le data.js pour charger mon modal.


## Bloc 3 : correctifs et finalisation

1. Qu'est-ce que j'ai accompli depuis le dernier bloc? (Vous pouvez faire référence à vos commits.)
  - J'ai complété la majorité du responsive du site, complété le `projects.json` pour qu'il affiche les bonnes informations et renvoie au bon site et j'ai ajouté plusieurs animations GSAP ainsi que le modal chargé dynamiquement aussi avec asynchrone.
2. Quelle a été ma principale difficulté et comment je l'ai surmontée?
  - Il s'agit probablement du modal chargé dynamiquement, je n'avais jamais fait ça auparavant. L'IA m'a été utile pour comprendre comment faire et l'appliquer. J'ai ensuite pu, en comprenant le code, faire afficher uniquement le bouton quand il y avait de l'information dans le modal.
3. Qu'est-ce que j'ai appris que je ne savais pas avant?
  - J'ai appris comment utiliser GSAP (scrollTrigger, timeline, animation text/div) qui est sensiblement la même chose que AnimeJS.
4. Quelle est ma prochaine étape concrète?
  - Corriger les quelques bugs restants et ajouter quelques animations au besoin, ainsi que d'ajouter un swiper fonctionnel pour les images des projets.
5. Est-ce que j'ai utilisé l'IA? Si oui, pour quoi et qu'est-ce que ça m'a appris?
  -  IA m'a permis de comprendre comment créer un modal chargé dynamiquement et d'afficher les animations d'un projet seulement lorsque celui-ci est affiché, car je rappelle que mon projet est un one-pager avec des `display:none` et `display:flex`