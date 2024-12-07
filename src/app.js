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


export default app;
