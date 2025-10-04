import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Title 1',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Title 2',
      isCompleted: true,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException('Sorry, task not found');
    }

    return task;
  }

  create(dto: CreateTaskDto) {
    const { title, description, priority, tags } = dto;
    const num = this.tasks.length + 1;

    const task = {
      id: num,
      title,
      isCompleted: false,
      description,
      priority,
      tags,
    };

    this.tasks.push(task);

    return this.tasks;
  }

  update(id: number, dto: UpdateTaskDto) {
    const { title, isCompleted } = dto;
    const task = this.findById(id);

    task.title = title;
    task.isCompleted = isCompleted;

    return task;
  }

  patchTask(id: number, dto: Partial<UpdateTaskDto>) {
    const task = this.findById(id);

    Object.assign(task, dto);

    return task;
  }

  delete(id: number) {
    const task = this.findById(id);

    this.tasks = this.tasks.filter((t) => t.id !== id);

    return task;
  }
}
