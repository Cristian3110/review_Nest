import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';

import { v4 as uuidv4 } from 'uuid';
import { UpdateTaskDto } from './DTO/task.dto';

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
  deleteTask(id: string) {
    //devolviendo el arreglo sin el difererente
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updatedFields: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updatedFields);
    console.log(newTask);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));

    return newTask;
  }
}
