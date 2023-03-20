import { Document, Model, model, Schema } from 'mongoose';

export interface IClass extends Document {
  className: string;
  classSummary: string;
}

const classSchema: Schema<IClass> = new Schema({
  className: { type: String, required: true },
  classSummary: { type: String, required: true },
});

export const Class: Model<IClass> = model<IClass>('Class', classSchema);