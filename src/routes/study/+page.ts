/** @type {import('./$types').PageLoad} */
export async function load() {
    
    return {

        experiences: [
            {
                date: "2022",
                title: "Développeur Java / Angular",
                place: "CGI - Amiens",
                desc: [
                    "Développement évolutions / Maintenance applications web & mobile",
                    // "Développement des évolutions et correctifs sur VM Linux",
                    "Démonstration / Test sur environnement d'intégration dockérisé",
                    // "Travail en équipe suivant les méthodes agiles",
                    // "Utilisation IntelliJ / VS Code / Android Studio / GitLab",
                ],
                techno: {
                    web: "HTML , CSS, JavaScript, JAVA",
                    mobile: "Angular, Ionic, TypeScript",
                    desktop: "Electron, Angular, TypeScript"
                }
            },
        ],
        studies: [
            {
               date: "2021",
               title: "Formation React Native",
               place: "La MANU - Amiens",
               desc: "Maîtrise du framework React Native",
               techno: "RN, JSX, Redux, Mongo DB"
            },
            {
               date: "2020-2021",
               title: "Formation Web & Web Mobile",
               place: "La MANU - Amiens",
               desc: "RNCP 31114, Niveau 5, Bac+2",
               techno: "HTML, CSS, JS, PHP, SQL"
            },
           //  {
           //     date: "2002-2004",
           //     title: "BTS - Mécanique & Automatisme Industriel",
           //     place: "CFAI Somme | VALEO - Amiens",
           //     desc: "Diplôme en alternance obtenu en 2004",
           //     // techno: "Télémécanique, Siemens"
           //     techno: "",
           //  },
        ],
        resume: [
            "Développement et maintenance de site du Ministère de la Transition Ecologique",
            "Travaille en équipe suivant les méthodes agiles",
            "Développement des évolution sur VM Linux",
            "Utilisation du dépôt GitLab",
            "Démonstration client / test sur environnement d'intégration",
            "Visites mon profil Linkedin pour plus d'info ou simplement contactes moi"
        ],
    }
}