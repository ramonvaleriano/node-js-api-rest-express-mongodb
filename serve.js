// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;
// const rotas = {
//   "/": "Curso NodeJs",
//   "/livros": "Entrei na rota Livros",
//   "/autores": "Entrei na rota Autores",
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(rotas[req.url]);
// });

// server.listen(PORT, () => {
//   console.log("Servidor Escutando!");
// });

app.listen(PORT, () => {
  console.log("Servidor Escutando!");
});
