import livro from "../models/livro.js";

class LivroController {
  //Listar todos os livros
  static async listarLivros(req, res) {
    try {
      const livrosEncontrados = await livro.find({});

      res.status(200).json(livrosEncontrados);
    } catch (erro) {
      res.status(500).json({ mensagem: erro.message });
    }
  }

  // Encontrar um livro especifico pelo id
  static async livroPorId(req, res) {
    try {
      const idHeader = req.params.id;
      const livroEncontrado = await livro.findById(idHeader);

      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res.status(500).json({ mensagem: erro.message });
    }
  }

  // Adicionar um libro no banco de dados
  static async adicionarLivro(req, res) {
    try {
      const livroAdicionado = livro.create(req.body);

      res.status(201).json({
        messangem: "Livro adicionado com sucesso",
        livro: livroAdicionado,
      });
    } catch (erro) {
      res.status(500).json({ mensagem: erro.message });
    }
  }

  // Atualizar livro
  static async atualizarLivro(req, res) {
    try {
      const idHeader = req.params.id;

      const livroAtualizado = await livro.findOneAndUpdate(
        { _id: idHeader },
        req.body,
        { new: true }
      );

      res.status(201).json({ livro: livroAtualizado });
    } catch (erro) {
      res.status(500).json({ mensagem: erro.message });
    }
  }

  // Deletar livro
  static async deletarLivro(req, res) {
    try {
      const idHeader = req.params.id;

      const livroDeletado = await livro.findOneAndDelete(
        { _id: idHeader },
        { new: true }
      );

      res.status(201).json(livroDeletado);
    } catch (erro) {
      res.status(500).json({ mensagem: erro.message });
    }
  }
}

export default LivroController;
