/*
 *  App entry point
 */

import cors from 'cors'
import express, { Express } from 'express'

import { auth } from './util/better-auth';
import { toNodeHandler } from 'better-auth/node';

import taskRoutes from './route/task.route'

const APP: Express = express()

APP.use(cors({
  origin: process.env.CLIENT_BASE_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

APP.use(express.json())
APP.use(express.urlencoded({ extended: true }))

// Routes
APP.use('/api/tasks', taskRoutes)

APP.use('/api/auth', toNodeHandler(auth))


export default APP
