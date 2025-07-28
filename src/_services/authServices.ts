// authService.ts
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/firebase'
import { API_URL } from '../utils/config'



//connexion avec google
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


//verification tokens
export async function envoyerTokenAuBackend(token: string, username?: string) {
  const response = await fetch(`${API_URL}/api/auth/firebase-login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      idToken: token,
      username: username
    })
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error?.message || 'Erreur côté serveur')
  }

  return await response.json()
}
