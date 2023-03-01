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

interface iForms {
  typeAvaliation: string
  themeAvaliation?: string
  questions?: iQuestions[]
  initialAvaliation?: string
  finalAvaliation?: string
  time?: string
  points?: number
}
interface FormDocument extends Document, iForms {}

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

const FormSchema = new Schema<FormDocument>({
  typeAvaliation: String,
  themeAvaliation: String,
  questions: [QuestionSchema],
  initialAvaliation: String,
  finalAvaliation: String,
  time: String,
  points: Number,
});

const FormModel = model<FormDocument>('Form', FormSchema);

export { iForms, FormDocument, FormModel };

