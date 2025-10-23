import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import { Task } from './entities/task.entity';

import { HandleExceptions } from 'src/common/utils/handle-exceptions.util';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    try {
      const task = this.taskRepository.create(createTaskDto);

      return await this.taskRepository.save(task);
    } catch (error) {
      HandleExceptions.check(error);
    }
  }

  async findOne(id: string) {
    const task = await this.taskRepository.findOneBy({
      id,
    });

    if (!task) throw new NotFoundException(`Task with id ${id} not found`);

    return task;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  async remove(id: string) {
    const task = await this.findOne(id);

    await this.taskRepository.remove(task);
  }
}
