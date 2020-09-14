
import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { User } from './User';

export class Project {
  @prop({ ref: () => User, required: true })
  public users!: Ref<User>[];
}

export const ProjectModel = getModelForClass(Project);
