import expresse from "express"
import AutorController from "../controllers/autorController.js"

const routes = expresse.Router()

/*Todas as rotas GET*/
// Lista de autores
routes.get("/autores", AutorController.autoresListados)

// Autor por id
routes.get("/autor/:id", AutorController.autorViaId)

/*Todas as rotas POST*/
// Criar um autor
routes.post("/autor", AutorController.autorCriado)

/*Todas as PUT*/
// Atualizar autor
routes.put("/autor/:id", AutorController.autorAtualizado)

/*Todas as rotas DELETE*/
// Deletar um autor
routes.delete("/autor/:id", AutorController.autorDeletado)

export default routes

