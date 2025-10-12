/*
 *  Entry point for the Express server
 */

import cors from 'cors'
import express, { Express, type Request, type Response } from 'express'
import { prisma } from './client'

const APP: Express = express()
const PORT = process.env.PORT || 4120

APP.use(cors())
APP.use(express.json())

APP.get('/', async (req: Request, res: Response) => {
  const data = await prisma.user.findMany()
  return res.json({ msg: 'We on', data })
})

APP.listen(PORT, () => {
  console.log(`Server running on http://localhost:${ PORT }`)
})