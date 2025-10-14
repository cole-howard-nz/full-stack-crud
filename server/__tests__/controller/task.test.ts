import { prisma } from '../setup'
import { expect, describe, test } from '@jest/globals'

describe('Task CRUD operations', () => {
  test('should give all tasks from user1', async () => {
    // Data was already seeded in beforeAll(), just check it exists
    const users = await prisma.user.findMany()
    const tasks = await prisma.task.findMany()
    
    console.log('Users:', users)
    console.log('Tasks:', tasks)
    
    expect(users[0].email).toBe('test1@example.com')
    expect(users[1].email).toBe('test2@example.com')
    
    expect(tasks).toHaveLength(2)
    expect(tasks[0].title).toBe('Test Task 1')
    expect(tasks[1].title).toBe('Test Task 2')
  })
})


