export interface CoursDetail {
  id: number
  slug: string
  mentor: {
    nom: string
    description: string
    image: string
  }
  exigences: string[]
  avantages: string[]
  lecons: { id: number; titre: string }[]
}

export const coursDetails: CoursDetail[] = [
  {
    id: 1,
    slug: 'maitriser-devops',
    mentor: {
      nom: 'Jean Dupuis',
      description: "Expert DevOps avec plus de 10 ans d\'expérience. Jean a dirigé de nombreux projets d\'automatisation dans des entreprises technologiques majeures.",
      image: '/images/mentors/jean.png'
    },
    exigences: [
      'Connaissance de base en ligne de commande',
      'Git installé sur votre ordinateur',
      'Compétences de base en développement logiciel'
    ],
    avantages: [
      'Accès à vie',
      'Leçons orientées pratique',
      '20% de rabais sur d\'autres cours',
      'Mises à jour trimestrielles'
    ],
    lecons: [
      { id: 1, titre: 'Introduction au DevOps' },
      { id: 2, titre: 'Installation des outils de base' },
      { id: 3, titre: 'Automatiser les déploiements' },
      { id: 4, titre: 'CI/CD avec GitLab' },
      { id: 5, titre: 'Observabilité et monitoring' },
      { id: 6, titre: 'Bonnes pratiques et sécurité' },
      { id: 7, titre: 'Projet final' }
    ]
  }
]
