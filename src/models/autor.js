import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String, required: false },
  },
  { versionKey: false }
);

const author = mongoose.model("autores", authorSchema);

export { author, authorSchema };
