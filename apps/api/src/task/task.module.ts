import { Module } from '@nestjs/common'
import { TasksResolver } from './task.resolver'
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TasksSchema } from './task.schema';
import { TasksService } from './task.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Task.name, schema: TasksSchema }])],
    providers: [TasksResolver, TasksService]
})

export class TasksModule {}
