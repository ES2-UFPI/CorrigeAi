import mongoose from "mongoose";
const Schema = mongoose.Schema;



const assignmentsSchema = new Schema({
  theme: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  deadline: Number,
});

const testSchema = new Schema({
  theme: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  deadline: Number,
  ponctuation: Number,
});

const assignment = mongoose.model('assignments', assignmentsSchema);
const test = mongoose.model('test', testSchema);

module.exports = { 
    assignment,
    test 
  };

