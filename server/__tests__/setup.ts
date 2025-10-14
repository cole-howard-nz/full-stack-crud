import { beforeAll, afterAll, beforeEach, jest } from '@jest/globals'
import { PrismaClient } from '@prisma/client'
import { execSync } from 'child_process'
import { clearDatabase, seedTestDatabase } from './seed'


const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.TEST_DATABASE_URL,
    },
  }
})


beforeAll(async () => {
  console.log('Setting up tests...')
  execSync('npx prisma migrate deploy', {
    env: {
      ...process.env,
      DATABASE_URL: process.env.TEST_DATABASE_URL,
    }
  })
  
  await prisma.$connect()
})

afterAll(async () => {
  console.log('Cleaning up tests...')
  await prisma.$disconnect()
})

beforeEach(async () => {
  jest.clearAllMocks()
  await clearDatabase(prisma)
  await seedTestDatabase(prisma)
})


export { prisma }