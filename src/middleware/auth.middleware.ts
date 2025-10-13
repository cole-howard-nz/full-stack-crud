/*
 *   Middleware to require authentication
 */
import { Request, Response, NextFunction } from 'express'
import verifyToken from '../util/better-auth'

const requireAuth = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const authHeader = request.headers.authorization

    if (!authHeader) return response.status(401).json({ error: 'Missing Authorisation header' })

    const token = authHeader.split(' ')[1]
    const user = await verifyToken(token)

    // Attach better auth user info to request object
    request.user = user
    next()
    
  } catch (err) {
    response.status(401).json({ error: 'Unauthorised' });
  }
}

export default requireAuth