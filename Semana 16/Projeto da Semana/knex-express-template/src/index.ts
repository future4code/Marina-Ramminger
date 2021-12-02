import express, { Request, Response } from 'express';
import cors from "cors";
import app from "./app";
import connection from "./connection"

app.get("/", (req, res) => { res.send("Hello from Express!")});

app.post("/user", async (req, res) => {
    try {
        await connection.raw(`
       INSERT INTO ListUser (id, nome, nickname, email)
       VALUES (
           "${Date.now().toString()}",
           "${req.body.nome}",
           "${req.body.nickname}",
           "${req.body.email}"
       ) 
        `);
        res.status(201).send("Usuário criado com sucesso")
    } catch (error:any) {
        res.status(500).send({mensagem: error.message})
    }
})