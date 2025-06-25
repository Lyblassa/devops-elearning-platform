export interface Cours {
  id: number
  titre: string
  slogan: string
  description: string
  image_logo: string
  duree_heures: number
  duree_minutes: number
  nbLecons: number
  categorieSlug: string
}

export const cours: Cours[] = [
  {
    id: 1,
    titre: "Maîtriser DevOps",
    slogan: "Automatiser le cycle de vie logiciel",
    description: "Dans ce cours, vous apprendrez automatiser le cycle de vie logiciel dans le contexte de devops, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 8,
    duree_minutes: 45,
    nbLecons: 20,
    categorieSlug: "devops"
  },
  {
    id: 2,
    titre: "CI/CD avec GitLab",
    slogan: "Déploiement continu sans douleur",
    description: "Dans ce cours, vous apprendrez déploiement continu sans douleur dans le contexte de devops, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 13,
    duree_minutes: 0,
    nbLecons: 21,
    categorieSlug: "devops"
  },
  {
    id: 3,
    titre: "Culture DevOps",
    slogan: "Aligner équipes dev et ops efficacement",
    description: "Dans ce cours, vous apprendrez aligner équipes dev et ops efficacement dans le contexte de devops, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 9,
    duree_minutes: 0,
    nbLecons: 11,
    categorieSlug: "devops"
  },
  {
    id: 4,
    titre: "Git avancé",
    slogan: "Gestion de branches et merge complexes",
    description: "Dans ce cours, vous apprendrez gestion de branches et merge complexes dans le contexte de git & github, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 6,
    duree_minutes: 0,
    nbLecons: 11,
    categorieSlug: "git-github"
  },
  {
    id: 5,
    titre: "GitHub Actions",
    slogan: "Automatiser vos workflows GitHub",
    description: "Dans ce cours, vous apprendrez automatiser vos workflows github dans le contexte de git & github, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 11,
    duree_minutes: 15,
    nbLecons: 24,
    categorieSlug: "git-github"
  },
  {
    id: 6,
    titre: "Collaborer sur GitHub",
    slogan: "Pull requests et bonnes pratiques",
    description: "Dans ce cours, vous apprendrez pull requests et bonnes pratiques dans le contexte de git & github, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 13,
    duree_minutes: 15,
    nbLecons: 24,
    categorieSlug: "git-github"
  },
  {
    id: 7,
    titre: "Pipeline CI/CD",
    slogan: "Automatiser les tests et déploiements",
    description: "Dans ce cours, vous apprendrez automatiser les tests et déploiements dans le contexte de ci/cd, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 18,
    duree_minutes: 0,
    nbLecons: 15,
    categorieSlug: "ci-cd"
  },
  {
    id: 8,
    titre: "Jenkins pour débutants",
    slogan: "Créer vos premières chaînes CI",
    description: "Dans ce cours, vous apprendrez créer vos premières chaînes ci dans le contexte de ci/cd, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 8,
    duree_minutes: 30,
    nbLecons: 12,
    categorieSlug: "ci-cd"
  },
  {
    id: 9,
    titre: "Intégration Continue moderne",
    slogan: "Tester dès le commit",
    description: "Dans ce cours, vous apprendrez tester dès le commit dans le contexte de ci/cd, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 14,
    duree_minutes: 15,
    nbLecons: 21,
    categorieSlug: "ci-cd"
  },
  {
    id: 10,
    titre: "Introduction à Docker",
    slogan: "Conteneuriser vos applications",
    description: "Dans ce cours, vous apprendrez conteneuriser vos applications dans le contexte de docker, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 13,
    duree_minutes: 0,
    nbLecons: 15,
    categorieSlug: "docker"
  },
  {
    id: 11,
    titre: "Docker Compose",
    slogan: "Orchestration multi-conteneurs",
    description: "Dans ce cours, vous apprendrez orchestration multi-conteneurs dans le contexte de docker, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 17,
    duree_minutes: 45,
    nbLecons: 25,
    categorieSlug: "docker"
  },
  {
    id: 12,
    titre: "Optimiser vos images",
    slogan: "Bonnes pratiques Dockerfile",
    description: "Dans ce cours, vous apprendrez bonnes pratiques dockerfile dans le contexte de docker, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 8,
    duree_minutes: 45,
    nbLecons: 16,
    categorieSlug: "docker"
  },
  {
    id: 13,
    titre: "Kubernetes fondations",
    slogan: "Déployer une app scalable",
    description: "Dans ce cours, vous apprendrez déployer une app scalable dans le contexte de kubernetes, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 12,
    duree_minutes: 0,
    nbLecons: 17,
    categorieSlug: "kubernetes"
  },
  {
    id: 14,
    titre: "Helm & Kubernetes",
    slogan: "Gérer vos déploiements avancés",
    description: "Dans ce cours, vous apprendrez gérer vos déploiements avancés dans le contexte de kubernetes, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 13,
    duree_minutes: 15,
    nbLecons: 15,
    categorieSlug: "kubernetes"
  },
  {
    id: 15,
    titre: "Monitoring sur K8s",
    slogan: "Logs, métriques et alertes",
    description: "Dans ce cours, vous apprendrez logs, métriques et alertes dans le contexte de kubernetes, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 16,
    duree_minutes: 0,
    nbLecons: 15,
    categorieSlug: "kubernetes"
  },
  {
    id: 16,
    titre: "Terraform 101",
    slogan: "Infrastructure as Code simple",
    description: "Dans ce cours, vous apprendrez infrastructure as code simple dans le contexte de terraform, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 20,
    duree_minutes: 15,
    nbLecons: 23,
    categorieSlug: "terraform"
  },
  {
    id: 17,
    titre: "Modules Terraform",
    slogan: "Réutilisabilité et bonnes pratiques",
    description: "Dans ce cours, vous apprendrez réutilisabilité et bonnes pratiques dans le contexte de terraform, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 9,
    duree_minutes: 30,
    nbLecons: 17,
    categorieSlug: "terraform"
  },
  {
    id: 18,
    titre: "Déployer sur AWS avec Terraform",
    slogan: "Cloud automatisé",
    description: "Dans ce cours, vous apprendrez cloud automatisé dans le contexte de terraform, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 13,
    duree_minutes: 30,
    nbLecons: 16,
    categorieSlug: "terraform"
  },
  {
    id: 19,
    titre: "Surveiller vos systèmes",
    slogan: "Prometheus et Grafana",
    description: "Dans ce cours, vous apprendrez prometheus et grafana dans le contexte de monitoring, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 13,
    duree_minutes: 45,
    nbLecons: 20,
    categorieSlug: "monitoring"
  },
  {
    id: 20,
    titre: "Alerting efficace",
    slogan: "Réagir avant la panne",
    description: "Dans ce cours, vous apprendrez réagir avant la panne dans le contexte de monitoring, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 11,
    duree_minutes: 15,
    nbLecons: 11,
    categorieSlug: "monitoring"
  },
  {
    id: 21,
    titre: "Logs centralisés",
    slogan: "Stack ELK en pratique",
    description: "Dans ce cours, vous apprendrez stack elk en pratique dans le contexte de monitoring, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 18,
    duree_minutes: 30,
    nbLecons: 19,
    categorieSlug: "monitoring"
  },
  {
    id: 22,
    titre: "AWS pour développeurs",
    slogan: "Services essentiels à connaître",
    description: "Dans ce cours, vous apprendrez services essentiels à connaître dans le contexte de cloud, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 12,
    duree_minutes: 30,
    nbLecons: 23,
    categorieSlug: "cloud"
  },
  {
    id: 23,
    titre: "Déployer sur Azure",
    slogan: "VMs, App Service et plus",
    description: "Dans ce cours, vous apprendrez vms, app service et plus dans le contexte de cloud, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 10,
    duree_minutes: 30,
    nbLecons: 22,
    categorieSlug: "cloud"
  },
  {
    id: 24,
    titre: "Stockage Cloud",
    slogan: "S3, Blob et gestion de fichiers",
    description: "Dans ce cours, vous apprendrez s3, blob et gestion de fichiers dans le contexte de cloud, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 15,
    duree_minutes: 45,
    nbLecons: 10,
    categorieSlug: "cloud"
  },
  {
    id: 25,
    titre: "Sécuriser une API REST",
    slogan: "Auth, JWT et meilleures pratiques",
    description: "Dans ce cours, vous apprendrez auth, jwt et meilleures pratiques dans le contexte de sécurité, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 8,
    duree_minutes: 45,
    nbLecons: 23,
    categorieSlug: "securite"
  },
  {
    id: 26,
    titre: "Pentesting Web",
    slogan: "Détecter les vulnérabilités",
    description: "Dans ce cours, vous apprendrez détecter les vulnérabilités dans le contexte de sécurité, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 7,
    duree_minutes: 30,
    nbLecons: 20,
    categorieSlug: "securite"
  },
  {
    id: 27,
    titre: "Sécurité dans le pipeline",
    slogan: "CI/CD sécurisé",
    description: "Dans ce cours, vous apprendrez ci/cd sécurisé dans le contexte de sécurité, avec des démonstrations pratiques et des exercices guidés.",
    image_logo: "",
    duree_heures: 19,
    duree_minutes: 0,
    nbLecons: 23,
    categorieSlug: "securite"
  },
]
