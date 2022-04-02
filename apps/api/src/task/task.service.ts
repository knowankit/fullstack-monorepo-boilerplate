import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TasksDocument, CreateTaskInput, TaskId, UpdateTaskInput } from './task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private tasksModel: Model<TasksDocument>) {}

  async getTasks() {
    return this.tasksModel.find()
  }

  async getTask(id: TaskId) {
    return this.tasksModel.findOne({ _id: id })
  }

  async createTask(task: CreateTaskInput) {
    return this.tasksModel.create(task);
  }

  async updateTask(id: TaskId, update: UpdateTaskInput) {
    return this.tasksModel.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
  }

  async deleteTask(taskId: TaskId) {
    return this.tasksModel.findOneAndRemove({ _id: taskId });
  }
}
