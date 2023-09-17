import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaDatabase, FaServer, FaCog, FaArrowUp } from 'react-icons/fa';

export const DataSkills = [
  {
    id: 1,
    icon: [<FaHtml5 />, < FaCss3 />],
    name: 'HTML, CSS, SASS',
    description: [
      "Intégrer du contenu conformément à une maquette",
      "Implémenter une interface responsive",
      "Utilisation des fonctionnalités Sass"
    ],
  },
  {
    id: 2,
    icon: [<FaReact />, < FaJs />],
    name: 'Javscript, React',
    description:
      [
        "Manipuler les éléments du DOM",
        "Récupérer des données via des formulaires",
        "Gérer les évènements utilisateur",
        "Interagir avec des API externe",
        "Manipuler des données au format JSON"
      ],
  },
  {
    id: 3,
    icon: [<FaNodeJs />, <FaServer />, < FaDatabase />],
    name: 'NodeJS, ExpressJS, MongoDB',
    description:
      [
        "Implémenter, un modèle logique de donner",
        "Mettre en œuvre des opérations CRUD",
        "Stocker des données de manière sécurisée",
        "Intégration d'un système d'authentification par JWT",
        "Utilisation des bonnes pratiques du Green Code"
      ],
  },
  {
    id: 4,
    icon: [<FaCog />, <FaArrowUp />],
    name: 'SEO, Optimisation',
    description:
      [
        "Optimiser les performances d’un site web",
        "Débugger un site web grâce aux Chrome DevTools",
        "Optimisation du référencement naturel d'un site web",
        "Rédiger un cahier de recette pour tester un site"
      ],
  }
];