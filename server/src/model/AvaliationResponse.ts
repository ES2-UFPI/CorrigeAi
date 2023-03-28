import { AvaliationDocument }  from './Avaliation';
import { Schema, model, Document } from 'mongoose';

interface iAvaliationResponse extends AvaliationDocument {
  _id: string
}

const AvaliationResponseSchema = new Schema<iAvaliationResponse>({
  _id: String,
});

export default model<iAvaliationResponse>('AvaliationResponse', AvaliationResponseSchema);