import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routers/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.error("Erro gerado: ", erro);
});

conexao.once("open", () => {
  console.log("Banco de dados conectado!");
});

const app = express();
app.routes
routes(app);

const livros = [
  {
    id: 1,
    nome: "Senhor dos aneis 1",
  },
  {
    id: 2,
    nome: "Hobbit",
  },
];

function procuraIndex(id) {
  const livroIndice = livros.findIndex((livro) => {
    return livro.id === Number(id);
  });

  return livroIndice;
}

function procuraLivro(id) {
  const livroIndice = procuraIndex(id);

  if (livroIndice !== -1) {
    return livros[livroIndice];
  }

  return "Livro não encontrado.";
}

function modificaLivro(indice, id, dadoLivro) {
  livros[indice] = {
    id: id,
    nome: dadoLivro["nome"],
  };
}

function deleteLivro(indice) {
  livros.splice(indice, 1);
}

// Requisições Delete
app.delete("/livro/:id", (req, res) => {
  const livroSolicitado = procuraLivro(req.params.id);
  if (livroSolicitado === "Livro não encontrado.") {
    res.status("404").send(livroSolicitado);
  } else {
    const indiceLivro = procuraIndex(req.params.id);
    deleteLivro(indiceLivro);
    res.status(201).send("Livro deletado com sucesso!");
  }
});

export default app;
