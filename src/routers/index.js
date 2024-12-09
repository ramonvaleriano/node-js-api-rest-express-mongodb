import express from "express";
import livros from "./livrosrouters.js";
import autores from "./autoresroutes.js";

const routers = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Curso de NodeJs");
  });

  app.use(express.json(), livros);
  app.use(express.json(), autores);
  /**
   * No curso ensinar  ausar da seguinte forma:
   * app.use(express.json(), livros, autores);
   * Porém eu tinha testando dividindo em duas chamadas e funcionou, sendo assim, 
   * deixarei dessa forma por enquanto.
   */
};

export default routers;
