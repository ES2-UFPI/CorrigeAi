import { Document, Model, model, Schema } from 'mongoose';

export interface IStudent extends Document {
  name: string;
  password: string;
  email: string;
  user: string;
}

const studentSchema: Schema<IStudent> = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  user: { type: String, required: true, unique: true },
});

export const Student: Model<IStudent> = model<IStudent>('Student', studentSchema);