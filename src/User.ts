import { getModelForClass, prop } from '@typegoose/typegoose';

export class User { 
  @prop({ type: String, required: true })
  public email!: string;
}

export const UserModel = getModelForClass(User)