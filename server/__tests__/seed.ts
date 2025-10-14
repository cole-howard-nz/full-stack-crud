import { PrismaClient } from '@prisma/client'

const clearDatabase = async (prisma: PrismaClient) => {
  const tablenames = await prisma.$queryRaw<Array<{ tablename: string }>>
    `SELECT tablename FROM pg_tables WHERE schemaname='public'`

  for (const { tablename } of tablenames) {
    if (tablename !== '_prisma_migrations') {
      try {
        await prisma.$executeRawUnsafe(`TRUNCATE TABLE "public"."${tablename}" CASCADE;`)
      } catch (error) {
        console.log({ error })
      }
    }
  }
}

const seedTestDatabase = async (prisma: PrismaClient) => {
  const user1 = await prisma.user.create({
    data: {
      email: 'test1@example.com',
      name: 'Test User 1'
    }
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'test2@example.com',
      name: 'Test User 2'
    }
  })

  await prisma.task.createMany({
    data: [
      {
        title: 'Test Task 1',
        description: 'Description 1',
        completed: false,
        userId: user1.id
      },
      {
        title: 'Test Task 2',
        description: 'Description 2',
        completed: true,
        userId: user2.id
      }
    ]
  })

  return { user1, user2 }
}

export { clearDatabase, seedTestDatabase }