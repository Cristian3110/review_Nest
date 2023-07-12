import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  //Private Property (simulation of DB)
  private tasks: Task[] = [
    {
      id: '1',
      title: 'First Task',
      description: 'Some Task',
      status: TaskStatus.IN_PROGRESS,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
  updateTask() {
    return { msg: 'update Task' };
  }
  deleteTask(id: string) {
    //devolviendo el arreglo sin el difererente
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
