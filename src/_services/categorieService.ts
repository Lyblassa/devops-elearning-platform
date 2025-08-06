export interface Categorie {
  id: number
  nom: string
  slug: string
  image: string
  glowColor: string
}

export async function fetchCategories(): Promise<Categorie[]> {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories`)
  if (!res.ok) throw new Error("Erreur lors du chargement des catégories")
  return await res.json()
}
