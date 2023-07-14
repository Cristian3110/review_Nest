import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

import { CreateTaskDto, UpdateTaskDto } from './DTO/task.dto';

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

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
    return { msg: 'Task Delete' };
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updatedFields);
  }
}
