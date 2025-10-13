/*
 *   Routes for the task model
 */
import { Router } from 'express'
import requireAuth from '../middleware/auth.middleware'
import { createTask, deleteTask, getTasks, updateTask } from '../controller/task.controller';

const router = Router()

router.use(requireAuth)

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router