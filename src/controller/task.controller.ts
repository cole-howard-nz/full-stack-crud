
// AI GENERATED CODE

import { Request, Response } from 'express';
import { prisma } from '../client';

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany({
    where: { userId: req.user!.id },
  });
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const task = await prisma.task.create({
    data: { title: req.body.title, userId: req.user!.id },
  });
  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await prisma.task.updateMany({
    where: { id, userId: req.user!.id },
    data: req.body,
  });
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.task.deleteMany({ where: { id, userId: req.user!.id } });
  res.json({ success: true });
};
