// @ts-nocheck
/** */
export async function load() {
    
    return {

        projects: [
            {
                id: "MovieHunter",
                platform: "mobile",
                language: "React Native",
                num: 1,
                title: "Movie Hunter",
                subject: "Se tenir informé des sorties en salle de Cinéma & Séries TV",
                objective: "Movie Hunter permet de découvrir les prochaines sorties cinéma, de voir les trailers et bandes annonces et d'obtenir quelques informations",
                inner: [
                    "Movie Hunter utilise l'API TMDB pour recceuillir les données sur les Films et Séries TV et propose quelques fonctionnalités: ",
                    "- Présentation d'un film récent au hasard sur la page d'accueil elle présente ",
                    "- Sélection de films classés par catégorie: A découvrir / En ce moment / A venir / etc..",
                    "- Mise en favoris des films et/ou séries TV",
                    " -Regarder la bande annonce quand disponible",
                    " -Consulter informations films et séries (Producteur, Acteurs, Date de sortie, Durée, etc ...)",      
                ],
                use: "React Native / Realm / Redux / API Tmdb",
                author: "Vincent JOURDAN",
                path_mobile: [
                    "/images/screenshot_app/mobile/movie_hunter_1.webp",
                    "/images/screenshot_app/mobile/movie_hunter_2.webp",
                    "/images/screenshot_app/mobile/movie_hunter_3.webp"
                ],
                path_desktop: [
                    "/images/screenshot_app/movie_hunter_1.webp",
                    "/images/screenshot_app/movie_hunter_2.webp",
                    "/images/screenshot_app/movie_hunter_3.webp"
                ],
                alt: "app Movie Hunter"
            },
        
            {
                id: "WhatAroundMe",
                platform: "mobile",
                language: "React Native",
                num: "2",
                title: "What Around Me",
                subject: "Découvrir ce qui m'entoure, restaurants, hôtels, bars, tourisme, activités, etc..",
                objective: "What Around Me a pour mission de préparer l'arrivée d'un tourisme dans une nouvelle ville et de lui faire découvrir les activités qui pourrait l'intéresser selon des critères définis",
                inner: [
                    "What Around Me utilise l'API Yelp pour recueillir l'ensemble de ses informations",
                    "- Carte intéractive avec préselection géolocalisée",
                    "- Barre de recherche d'activités (à l'instar de google..)",
                    "- Menu et accès rapide aux principaux centres d'activité comme les restaurants ou shopping",
                    "- Possibilité de filtrer par catégories, distance max ou encore par moyen de locomotion",
                    "- Affichage résultats sous forme de Map ou Liste",
                    "- Gestion des favoris.."
                ],
                use: "React Native / Realm / Redux / API Yelp",
                author: "Vincent JOURDAN",
                path_mobile: [
                    // "/images/screenshot_app/mobile/what_around_1.webp",
                    "/images/screenshot_app/mobile/what_around_2.webp",
                    "/images/screenshot_app/mobile/what_around_3.webp",
                    "/images/screenshot_app/mobile/what_around_4.webp",
                    // "/images/screenshot_app/mobile/what_around_5.webp"
                ],
                path_desktop: [
                    // "/images/screenshot_app/what_around_1.webp",
                    "/images/screenshot_app/what_around_2.webp",
                    "/images/screenshot_app/what_around_3.webp",
                    "/images/screenshot_app/what_around_4.webp",
                    // "/images/screenshot_app/what_around_5.webp"
                ],
                alt: "page de garde site TrocTaCraftBeer.fr"
            },
        
            {
                id: "YouMustDo",
                platform: "mobile",
                language: "React Native",
                num: "3",
                title: "You Must Do",
                subject: "Application de gestion de Tâches / Rendez-vous",
                objective: "You Must DO permet simplement de gérer les choses qu'on à faire au quotidien pour ne pas les oublier",
                inner: [
                    "Gestion Inscription / Connexion & Connexion par empreinte digitale",
                    "Ajout / Suppression / Modification d'une tâche",
                    "Gestion des données entirèrement locale, ne nécessite aucune connexion"
                ],
                use: "React Native / Realm / Redux / TouchId",
                author: "Vincent JOURDAN",
                path_mobile: [
                    "/images/screenshot_app/mobile/ymd_1.webp",
                    // "/images/screenshot_app/mobile/ymd_2.webp",
                    // "/images/screenshot_app/mobile/ymd_3.webp",
                    // "/images/screenshot_app/mobile/ymd_4.webp",
                    "/images/screenshot_app/mobile/ymd_5.webp",
                    "/images/screenshot_app/mobile/ymd_6.webp"
                ],
                path_desktop: [
                    "/images/screenshot_app/ymd_1.webp",
                    // "/images/screenshot_app/ymd_2.webp",
                    // "/images/screenshot_app/ymd_3.webp",
                    // "/images/screenshot_app/ymd_4.webp",
                    "/images/screenshot_app/ymd_5.webp",
                    "/images/screenshot_app/ymd_6.webp"
                ],
                alt: "page de garde site TrocTaCraftBeer.fr"
            },
            {
                id: "TrocTaCraftBeer",
                platform: "desktop",
                language: "Php",
                origin: 'formation',
                num: 1,
                title: "TrocTaCraftBeer",
                // subject: "Projet présenté au titre DWWM - Mise en relation des brasseurs amateurs de ta région",
                subject: "Mise en relation des brasseurs amateurs de ta région",
                objective: "TrocTaCraftBeer a pour princpale but de partager tes recettes avec les autres brasseurs mais aussi de créer une communauté. Pouvoir apprendre de ses pairs ou de donner des conseils",
                inner: [
                    "Inscription avec confirmation par mail pour authentifier l'utilisateur",
                    "Mise en favoris des recettes d'autre brasseurs",
                    "Importation recette format XML provenant d'autre plateforme",
                    "Exportation des recettes télécharger sur le site",
                    "Gestion des brassins avec prise de notes",
                    "Gestion de son stock de matières premières",
                    "Possibilité de gestion dynamique du stock lié au brassin en cours"
                ],
                use: "HTML5 / CSS3 / PHP / JS / BOOTSTRAP / LARAGON / MYSQL / XML",
                author: "Vincent JOURDAN",
                path_mobile: "/images/screenshot_web/mobile/TTCB.webp",
                path_desktop: "/images/screenshot_web/TTCB2.webp",
                alt: "page de garde site TrocTaCraftBeer.fr",
                url: "https://troctacraftbeer.vincent-jourdan.fr"
            },
            {
                id: "GeneralHospital",
                platform: "desktop",
                language: "Php",
                origin: 'formation',
                num: 2,
                title: "General Hospital",
                subject: "Gestion de patientèle et prise de rendez-vous",
                objective: "",
                inner: [
                    "Ajout, suppression, modification des données patient",
                    "Ajout, suppression, modification des rendez-vous",
                ],
                use: "HTML5 / CSS3 / PHP / MYSQL",
                author: "Vincent JOURDAN",
                path_mobile: "/images/screenshot_web/mobile/GeneralHospital.webp",
                path_desktop: "/images/screenshot_web/GeneralHospital.webp",
                alt: "page de garde site generalHospital.fr",
                url: "https://troctacraftbeer.vincent-jourdan.fr"
            },
            {
                id: "ProjetVinyle",
                platform: "desktop",
                language: "Html / Css",
                origin: 'formation',
                num: 3,
                title: "Projet Vinyle",
                subject: "Rendre responsive site client existant",
                objective: "",
                inner: [
                    "Projet réalisé en groupe suivant les méthodes agiles", 
                    "Gestion de dépôts GIT"
                ],
                use: "HTML5 / CSS3 / BOOTSTRAP",
                author: "Vincent JOURDAN, Lucas THOMAS, Kevin MILET",
                path_mobile: "/images/screenshot_web/mobile/ProjetVinyle.webp",
                path_desktop: "/images/screenshot_web/ProjetVinyle.webp",
                alt: "page de Projet Vinyle",
                url: "https://vinyle.vincent-jourdan.fr"
            },
            {
                id: "Calendrier JS",
                platform: "desktop",
                language: "JavaScript",
                origin: 'formation',
                num: 4,
                title: "Calendrier JS",
                subject: "Création d'un calendrier JavaScript sans bibliothèque",
                objective: "",
                inner: [
                    "Gestion week-end & jours fériés", 
                    "Ajouter nouvel événement :",
                    "- Rappel",
                    "- Evénement",
                    "- Anniversaire",
                    "- Autres.."
                ],
                use: "HTML5 / CSS3 / JS",
                author: "Vincent JOURDAN",
                path_mobile: "/images/screenshot_web/mobile/calendar.webp",
                path_desktop: "/images/screenshot_web/calendar.webp",
                alt: "page de garde calendrier",
                url: "https://calendar.vincent-jourdan.fr"
            },
            {
                id: "MARAMA",
                platform: "desktop",
                language: "Word Press",
                origin: 'formation',
                title: "MARAMA",
                num: 5,
                subject: "Création de site vitrine en utilisant WordPress",
                objective: "",
                inner: [
                    "Thème prédéfini, Woocommerce, SEO", 
                    "Gestions des cookies avec tarteaucitron / tracking ID google analytics", 
                    "Thème enfant / Feuilles CSS et footer personnalisés"
                ],
                use: "WORDPRESS / PHP / JS",
                author: "Vincent JOURDAN",
                path_mobile: "/images/screenshot_web/mobile/wordpress-Marama.webp",
                path_desktop: "/images/screenshot_web/wordpress-Marama.webp",
                alt: "page de garde site Les Distilleries MARAMA",
                url: "#"
            },
            {
                id: "VSProduction",
                platform: "desktop",
                language: "Php",
                origin: 'formation',
                num: 6,
                title: "VS Production",
                subject: "Site vitrine d'une maison de production musicale",
                objective: "",
                inner: [
                    "Projet réalisé en groupe suivant les méthodes agiles", 
                    "Gestion de dépôts GIT",
                    "Player des artistes mis en avant"
                ],
                use: "HTML5 / CSS3 / PHP / JS",
                author: "<br>Vincent JOURDAN - Flo MOREL - Jérôme ALBRECHT - Kevin MILET",
                path_mobile: "/images/screenshot_web/mobile/VSPROD.webp",
                path_desktop: "/images/screenshot_web/VSPROD.webp",
                alt: "page de garde site VS Production",
                url: "https://vsprod.vincent-jourdan.fr"
            },
            {
                id: "BuyTheEWay",
                platform: "desktop",
                language: "JavaScript",
                origin: 'formation',
                num: 7,
                title: "Buy The E-Way",
                subject: "Site web dynamique en pure JS à partir d'un jeu de données XML",
                objective: "",
                inner: [
                    "Extraction de données à partir d'un fichier json / Découverte de la fonction fetch", 
                    "Affichage dynamique du site en JavaScript",
                    "Gestion d'un panier en JS"
                ],
                use: "HTML5 / CSS3 / JS / XML",
                author: "<br>Vincent JOURDAN - Laurent VACHÉ <br> Julien DELABARRE - Stéphane CAVILLON",
                path_mobile: "/images/screenshot_web/mobile/BuyTheE-Way.webp",
                path_desktop: "/images/screenshot_web/BuyTheE-Way.webp",
                alt: "page de garde site BuyTheE-Way",
                url: "https://eway.vincent-jourdan.fr"
            },
            {
                id: "MonPremierCV",
                platform: "desktop",
                language: "Php",
                origin: 'formation',
                num: 8,
                title: "Mon Premier CV",
                subject: "Réalisation de mon premier CV Numérique / Porte Folio",
                objective: "",
                inner: [
                    "Création d'un premier site porte folio",
                    "Utilisation et découverte de BOOTSTRAP"
                ],
                use: "HTML5 / CSS3 / BOOTSTRAP / JS",
                author: "Vincent JOURDAN",
                path_mobile: "/images/screenshot_web/mobile/premierCV.webp",
                path_desktop: "/images/screenshot_web/premierCV.webp",
                alt: "page de garde mon premier CV",
                url: "https://cv.vincent-jourdan.fr"
            }
        ]

    }
}