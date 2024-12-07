import express from "express";
import livros from "./livrosrouters.js";

const routers = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Curso de NodeJs");
  });

  app.use(express.json(), livros);
};

export default routers;
