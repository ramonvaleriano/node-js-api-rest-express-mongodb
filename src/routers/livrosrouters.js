import express from "express";
import LivroController from "../controllers/livrocontoller.js";

const routers = express.Router();

// Coletar todos os livros cadastrados
routers.get("/livros", LivroController.listarLivros);

// Coletando um livro por um parâmetro correto.
routers.get("/livro/busca", LivroController.encontarLivroPorParametro)

// Coletar livro por id
routers.get("/livro/:id", LivroController.livroPorId);

// Cadastrar um novo livro
routers.post("/livro", LivroController.adicionarLivro);

// Atualizar livro
routers.put("/livro/:id", LivroController.atualizarLivro);

// Deletar livro
routers.delete("/livro/:id", LivroController.deletarLivro);

export default routers;
