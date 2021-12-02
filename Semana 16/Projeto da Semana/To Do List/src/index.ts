import express, { Request, Response } from 'express';
import cors from "cors";
import app from "./app";
import connection from "./connection"


//CRIAR USUÁRIO //

app.put("/user", async (req, res) => {
    try {

        if (
        !req.body.nome ||
        !req.body.nickname ||
        !req.body.email )
        {
            res.status(400)
            .send("Algum campo está incompleto")
        }

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
        res.status(500).send({mensagem: error.message || error.sqlMessage})
    }
})

// PEGAR USUÁRIO PELO ID:

export async function buscaUserId (id: string) {
const result = await connection("ListUser")
.select("*")
.where({id})
return result [0]
}

app.get("/user/:id", async (req, res) => { {

    try {
        const user = await buscaUserId(req.params.id)

        if(!user) {
            res.status(404).send({mensagem: "Usuário não encontrado"})
        }
        res.status(200).send({
            id: user.id,
            nome: user.nome
        })
    } catch (error:any) {
        res.status(500).send({mensagem: error.message || error.sqlMessage})
    }
}
})

// EDITAR USUÁRIO:

export async function updateUser (
    id: string,
    nome?: string,
    nickname?: string,
    email?: string
    ){
        if(nome) {
            await connection.raw(`
            UPDATE ListUser
            SET nome = "${nome}"
            WHERE id = "${id}"
            `)
        }
        if(nickname) {
            await connection.raw(`
            UPDATE ListUser
            SET nickname = "${nickname}"
            WHERE id = "${id}"
            `)
        }
        if(email) {
            await connection.raw(`
            UPDATE ListUser
            SET email = "${email}"
            WHERE id = "${id}"
            `)
        }
    }

    app.post("/user/edit/:id", async (req, res) => {
        try {
            if(
                req.body.nome === "" ||
                req.body.nickname === "" ||
                req.body.email === ""
            ){
               return res.status(400).send({mensagem: "Atenção! Todos campos em branco"})
            }

            if( 
                !req.body.nome && 
                !req.body.nickname &&
                !req.body.email
            ) {
            return res.status(400).send({
                mensagem: "Atenção! Preencha ao menos um dos campos"
            })
        } 
        await updateUser(
            req.params.id, // passar todos os parâmetros que foram chamados na linha 67 a 70
            req.body.nome, // body porque a gente preenche - params ou query para valores dados
            req.body.nickname,
            req.body.email
        )
        res.status(200).send({
            mensagem: "Usuário atualizado com sucesso"
        })
    }
        catch (error:any) {
            res.status(500).send({mensagem: error.message || error.sqlMessage})
        }
    } )

    // CRIAR TAREFA

    export async function insertTask (
        id: string,
        title: string,
        descrição: string,
        prazo: string,
        responsável: string
    ) {
        await connection("ListTasks")
        .insert({
            id,
            title,
            descrição,
            prazo,
            responsável
        })
    }
    
    app.post("/task", async (req, res) => {
        try {
            if (
            !req.body.title ||
            !req.body.descrição ||
            !req.body.prazo ||
            !req.body.responsável 
             )
            {
                res.status(400)
                .send({mensagem: "Algum campo obrigatório está incompleto"})
          
            }
    
            await connection.raw(`
           INSERT INTO ListTasks (id, title, descrição, prazo, responsável)
           VALUES (
               "${Date.now().toString()}",
               "${req.body.title}",
               "${req.body.descrição}",
               "${req.body.prazo}",
               "${req.body.responsável}"
           ) 
            `);
            res.status(201).send({mensagem: "Tarefa criada com sucesso"})
        } catch (error:any) {
            res.status(500).send({mensagem: error.message || error.sqlMessage})
        }
    })

    // PEGAR TAREFA POR ID

    export async function buscaTask (id: string) {
        const result = await connection("ListTasks")
        .select("*")
        .where({id})
        return result [0]
        }
        
        app.get("/task/:id", async (req, res) => { {
        
            try {
                const task = await buscaTask(req.params.id)
        
                if(!task) {
                    res.status(404).send({mensagem: "Tarefa não encontrada"})
                }
                res.status(200).send({
                    id: task.id,
                    title: task.title,
                    descrição: task.descrição,
                    prazo: task.prazo,
                    responsável: task.responsável
                })
            } catch (error:any) {
                res.status(500).send({mensagem: error.message || error.sqlMessage})
            }
        }
        })