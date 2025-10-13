/*
 *   Utility function for interacting with Better Auth API
 */
const verifyToken = async (token: string) => {
  try {
    if (!token) throw new Error('No token provided')

    const res = await fetch('https://api.better-auth.dev/verify', {
      headers: { Authorization: `Bearer ${ token }` },
    })

    if (!res.ok) throw new Error('Invalid token')

    const data = await res.json()
    return data

  } catch (error) {
    console.error('Error verifying token:', error)
    return null
  }
}

export default verifyToken