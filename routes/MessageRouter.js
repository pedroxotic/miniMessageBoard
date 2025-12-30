const express = require("express");
const MessageRouter = express.Router();
const messages = require("../db");
const u =


MessageRouter.get("/:index", (req, res)=>{
  const index = req.params.index;
  const message = messages[index];
  console.log(message);

    res.render("message", {message}); // tiene que recibir el objeto que se escogio
 });

  module.exports = MessageRouter;
  // si se oprime el boton de messages[0], se abre messages [0]
  // e