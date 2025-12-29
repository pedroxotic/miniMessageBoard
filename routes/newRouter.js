const express = require("express");
const newRouter = express.Router();
const messages = require("../db");
const maniPost = require("../controller/newController");

 newRouter.get("/", (req, res)=>{
    res.render("index", {messages: messages})
 });
 newRouter.get("/new", (req, res)=>{
  res.render("form")
 })
 newRouter.post("/new",maniPost
 )

 module.exports = newRouter;
