import mongoose, { version } from "mongoose";

const livroSchema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.ObjectId },
    titulo: { type: String, require: true },
    preco: { type: Number, require: false },
    paginas: { type: Number, require: false },
  },
  { version: false }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;
