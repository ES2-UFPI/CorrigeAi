import { Schema, model, Document } from 'mongoose';

interface iAlternative {
  alternativeData?: string
  isCorrect: boolean
}

interface iQuestions {
  id: number //id para referenciar alternativa
  numberQuestion: number
  typeQuestion: string;
  description: string;
  expectedAnswerSubjective?: string
  points?: number;
  alternatives?: iAlternative []
}

interface iAvaliation {
  typeAvaliation: string
  themeAvaliation?: string
  questions?: iQuestions[]
  initialAvaliation?: string
  finalAvaliation?: string
  time?: string
  points?: number
}
interface AvaliationDocument extends Document, iAvaliation {}

const AlternativeSchema = new Schema<iAlternative>({
  alternativeData: String,
  isCorrect: Boolean,
});

const QuestionSchema = new Schema<iQuestions>({
  id: Number,
  numberQuestion: Number,
  typeQuestion: String,
  description: String,
  expectedAnswerSubjective: String,
  points: Number,
  alternatives: [AlternativeSchema],
});

const AvaliationSchema = new Schema<AvaliationDocument>({
  typeAvaliation: String,
  themeAvaliation: String,
  questions: [QuestionSchema],
  initialAvaliation: String,
  finalAvaliation: String,
  time: String,
  points: Number,
});

const AvaliationModel = model<AvaliationDocument>('Avaliation', AvaliationSchema);

export { iAvaliation, AvaliationDocument, AvaliationModel };

