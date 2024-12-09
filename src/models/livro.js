import mongoose, { version } from "mongoose";
import { authorSchema } from "./autor.js";

const livroSchema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.ObjectId },
    titulo: { type: String, require: true },
    preco: { type: Number, require: false },
    paginas: { type: Number, require: false },
    autor: authorSchema,
  },
  { version: false }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;
