export interface Categorie {
  id: number
  nom: string
  slug: string
  nbCours: number
  image: string
  glowColor: string
}

export const categories: Categorie[] = [
  {
    id: 1,
    nom: "DevOps",
    slug: "devops",
    nbCours: 12,
    image: "cours1.svg",
    glowColor: "#00ffff"
  },
  {
    id: 2,
    nom: "Git & GitHub",
    slug: "git-github",
    nbCours: 8,
    image: "cours2.svg",
    glowColor: "#ff66cc"
  },
  {
    id: 3,
    nom: "CI/CD",
    slug: "ci-cd",
    nbCours: 10,
    image: "cours3.svg",
    glowColor: "#ffa500"
  },
  {
    id: 4,
    nom: "Docker",
    slug: "docker",
    nbCours: 14,
    image: "cours4.svg",
    glowColor: "#00ccff"
  },
  {
    id: 5,
    nom: "Kubernetes",
    slug: "kubernetes",
    nbCours: 9,
    image: "cours5.svg",
    glowColor: "#cc99ff"
  },
  {
    id: 6,
    nom: "Terraform",
    slug: "terraform",
    nbCours: 7,
    image: "cours6.svg",
    glowColor: "#99ffcc"
  },
  {
    id: 7,
    nom: "Monitoring",
    slug: "monitoring",
    nbCours: 6,
    image: "cours7.svg",
    glowColor: "#ffcc00"
  },
  {
    id: 8,
    nom: "Cloud",
    slug: "cloud",
    nbCours: 13,
    image: "cours8.svg",
    glowColor: "#33cccc"
  },
  {
    id: 9,
    nom: "Sécurité",
    slug: "securite",
    nbCours: 11,
    image: "cours9.svg",
    glowColor: "#ff4444"
  }
]
