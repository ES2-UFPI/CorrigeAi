import { Document, Model, model, Schema } from 'mongoose';

export interface IProfessor extends Document {
  _id: string;
  name: string;
  password: string;
  email: string;
  user: string;
}

const professorSchema: Schema<IProfessor> = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  user: { type: String, required: true, unique: true },
});

export const Professor: Model<IProfessor> = model<IProfessor>('Professor', professorSchema);