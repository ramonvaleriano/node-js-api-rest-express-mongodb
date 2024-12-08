import expresse from "express"
import AutorController from "../controllers/autorController.js"

const routes = expresse.Router()

/*Todas as rotas GET*/
// Lista de autores
routes.get("/autores", AutorController.autoresListados)

// Autor por id
routes.get("/autor", AutorController.autorViaId)

/*Todas as rotas POST*/
// Criar um autor
routes.post("/autor", AutorController.autorCriado)

/*Todas as PUT*/
// Atualizar autor
routes.put("/autor", AutorController.autorAtualizado)

export default routes

