import { author, authorSchema } from "../models/autor.js";

const autores = author;

class AutorController {
  //  Listar todos os livros
  static async autoresListados(req, res) {
    try {
      const listaDeAutores = await autores.find({});
      res.status(200).json(listaDeAutores);
    } catch (erro) {
      res.status(500).json({ message: erro.message });
    }
  }

  // Obter um livro pelo ID.
  static async autorViaId(req, res) {
    try {
      const autorEncontrado = await autores.findById({ _id: req.params.id });

      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res.status(500).json({ message: erro.message });
    }
  }

  // Criar um novo autor.
  static async autorCriado(req, res) {
    try {
      const autorSendoCriado = await autores.create(req.body);

      res.status(201).json(autorSendoCriado);
    } catch (erro) {
      res.status(500).json({ message: erro.message });
    }
  }

  // Atualizando um autor.
  static async autorAtualizado(req, res) {
    try {
      const autorAtualizado = await autores.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );

      res.status(201).json(autorAtualizado);
    } catch (erro) {
      res.status(500).json({ message: erro.message });
    }
  }

  // Deletar autor.
  static async autorDeletado(req, res) {
    try {
      const autorDeletado = autores.findOneAndDelete(
        { _id: req.params.id },
        { new: true }
      );

      res.status(201).json(autorDeletado);
    } catch (erro) {
      res.status(500).json({ message: erro.message });
    }
  }
}

export default AutorController;
