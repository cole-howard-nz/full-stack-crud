/*
 *   Better Auth client
 */
import { createAuthClient } from "better-auth/react"

const authClient = createAuthClient({
  baseURL: import.meta.env.API_BASE_URL || 'http://localhost:4120/'
})

const { signIn, signUp, signOut, useSession } = authClient

export { signIn, signUp, signOut, useSession, authClient }