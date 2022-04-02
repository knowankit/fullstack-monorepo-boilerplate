import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

export type TasksDocument = Task & Document;

@Schema()
@ObjectType()
export class Task {
  @Prop()
  @Field(() => ID)
  _id: number;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop()
  @Field()
  description: string;

  @Prop()
  @Field()
  status: string;

  @Prop()
  @Field()
  startDate: Date;

  @Prop()
  @Field({ nullable: true})
  endDate: Date;
}

@InputType()
export class CreateTaskInput {
  @Field(() => ID)
  _id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  status: string = 'pending'

  @Prop()
  @Field()
  startDate: Date = new Date();

  @Prop()
  @Field({ nullable: true})
  endDate: Date;
}

@InputType()
export class TaskId {
  @Field(() => ID)
  _id: number;
}

@InputType()
export class UpdateTaskInput {
  @Field(() => ID)
  _id: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  status: string;

  @Prop()
  @Field({ nullable: true })
  startDate: Date

  @Prop()
  @Field({ nullable: true})
  endDate: Date;
}

export const TasksSchema = SchemaFactory.createForClass(Task);
