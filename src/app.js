import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.error("Erro gerado: ", erro);
});

conexao.once("open", () => {
  console.log("Banco de dados conectado!");
});

const app = express();
app.use(express.json());

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

// Requisições get
app.get("/", (req, res) => {
  res.status(200).send("Curso de NodeJs");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livro/:id", (req, res) => {
  const livroSolicitado = procuraLivro(req.params.id);
  res.status(200).json(livroSolicitado);
});

// Requisições Post
app.post("/livros", (req, res) => {
  let bodyReq = req.body;
  console.log(bodyReq);
  livros.push(bodyReq);
  res.status(201).send("Livros adicionado com sucesso.");
});

// Requisições Put
app.put("/livro/:id", (req, res) => {
  const livroSolicitado = procuraLivro(req.params.id);
  if (livroSolicitado === "Livro não encontrado.") {
    res.status("404").send(livroSolicitado);
  } else {
    const indiceLivro = procuraIndex(req.params.id);
    modificaLivro(indiceLivro, req.params.id, req.body);
    res.status(201).send(`Livro ${req.params.id} modificado!`);
  }
});

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
