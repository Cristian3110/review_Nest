import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

import { CreateTaskDto } from './DTO/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getalltasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    const task = this.tasksService.createTask(
      newTask.title,
      newTask.description,
    );

    //console.log(newTask);
    return {
      task,
      msg: 'Tarea creada',
    };
  }
}
