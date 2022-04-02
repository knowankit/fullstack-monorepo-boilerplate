import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { Task, CreateTaskInput, TaskId, UpdateTaskInput } from './task.schema'
import { TasksService } from './task.service'

@Resolver()
export class TasksResolver {
  constructor(
    private tasksService: TasksService,
  ) {}

  @Query(() => [Task])
  async getTasks() {
    return this.tasksService.getTasks()
  }

  @Query(() => Task)
  async getTask(@Args('input') id:TaskId) {
    return this.tasksService.getTask(id)
  }

  @Mutation(() => Task)
  async createTask(@Args('input') task: CreateTaskInput) {
    return this.tasksService.createTask(task);
  }

  @Mutation(() => Task)
  async updateTask(@Args('input') id:TaskId, @Args('input') task: UpdateTaskInput) {
    return this.tasksService.updateTask(id, task)
  }

  @Mutation(() => Task)
  async deleteTask(@Args('input') id:TaskId) {
    return this.tasksService.deleteTask(id)
  }
}
