// authService.ts
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/firebase'

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider()
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    const token = await user.getIdToken()

    //  Ici, tu pourras envoyer `token` au backend
    console.log('Connecté avec Google ! Utilisateur :', user)
    console.log('Token :', token)

    alert('Connexion réussie avec Google !')

    return { user, token }
  } catch (error) {
    console.error('Erreur avec Google :', error)
    alert("Échec de l'authentification avec Google.")
  }
}
