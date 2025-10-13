/*
 *  App entry point
 */

import cors from 'cors'
import express, { Express } from 'express'

import taskRoutes from './route/task.route'

const APP: Express = express()

APP.use(cors())
APP.use(express.json())

// Routes
APP.use('/api/tasks', taskRoutes)

export default APP
