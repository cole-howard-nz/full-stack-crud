/*
 *   Middleware to require authentication
 */
import { Request, Response, NextFunction } from 'express'
import { auth } from '../util/better-auth'

const requireAuth = async (request: Request, response: Response, next: NextFunction) => {
  try {
    // Get session from cookies using Better Auth's API
    const session = await auth.api.getSession({
      headers: request.headers as Record<string, string>
    })

    if (!session || !session.user) {
      return response.status(401).json({ error: 'Unauthorized' })
    }

    // Attach user info to request object
    request.user = session.user
    next()
    
  } catch (err) {
    console.error('Auth middleware error:', err)
    response.status(401).json({ error: 'Unauthorized' })
  }
}

export default requireAuth