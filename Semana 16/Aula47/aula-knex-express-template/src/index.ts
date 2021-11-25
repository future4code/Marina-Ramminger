import express, { Request, Response } from 'express';
import cors from "cors";
import app from "./app";
import connection from "./connection"

//Testando servidor//

// app.get("/", (req, res) => { res.send("Hello from Express!")});

// // EXERCÍCIO 1:
// //B) 
// // const buscaAtorNome = async (nome: string): Promise<any> => {
// //     const resultado = await connection.raw(`
// //       SELECT * FROM Atores WHERE nome = "${nome}"
// //     `)
// //     return resultado
// //   };

// C) const quantidadeAtorGênero = async (gênero: string): Promise<any> => {
//   const resultado = await connection.raw(`
//   SELECT COUNT(*) FROM Atores WHERE gênero = "${gênero}"
// `)
// return resultado
//};

//   //Vamos chamar essa função dentro do Endpoint dentro do endpoint:

// //CONSULTA COM O MÉTODO RAW:

  app.get("/atores", async (req: Request, res: Response) => { 
      try {
          const resultado = await connection.raw( `
          SELECT * FROM Atores;
          `); 
              res.status(201).send(resultado[0])
            
        } catch (error) {
              res.status(500).send("Ocorreu um erro inesperado");
          }
        }); 

//CONSULTA COM O MÉTODO QUERY BUILDER:

// app.get("/atores", async (req: Request, res: Response) => { 
//     try {
//         const resultado = await connection("Atores")
//         res.status(200).send(resultado)
//     } catch(error:any) {
//         //tratamento de erro//
//         res.status(500).send(error.sqlMessage || error.message);
//     }
// });

// //EXERCÍCIO 2: 
// //A)
// const atualizarSalário = async (id: string, salário: number): Promise<any> => {
//     await connection("Atores")
//       .update({
//         salário: salário,
//       })
//       .where("id", id);
//   }; 

//   //B) 
//   const deletarAtor = async (id: string): Promise<void> => {
//     await connection("Atores")
//       .delete()
//       .where("id", id);
//   }; 

//   //C) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

//   const mediaSalarialG = async (gênero: string, salário: number): Promise<any> => {
//     const resultado = await connection.raw(`
//     //   SELECT AVG(salário) FROM Atores WHERE gênero = "${gênero}"
//     // `)
//     return resultado};

//     //EXERCÍCIO 3: 
//     //A)
//     const buscaAtorId = async (id: string): Promise<any> => {
//         const resultado = await connection.raw(`
//           SELECT * FROM Atores WHERE id = "${id}"
//         `)
//         return resultado[0]
//       }

//     app.get("/atores/:id", async (req: Request, res: Response) => {
//         try {
//           const id = req.params.id;
//           const ator = await buscaAtorId(id);
      
//           res.status(200).send(ator)
//         } catch (err:any) {
//           res.status(400).send({
//             message: err.message,
//           });
//         }
//       });
      
      //B) QUERY PARAMETERS

      const quantidadeAtorGenero = async (gênero: string): Promise<any> => {
        const resultado = await connection.raw(`
        SELECT COUNT(*) FROM Atores WHERE gênero = "${gênero}"
         `)
        return resultado[0][0]; 
        };
        app.get("/ator", async (req: Request, res: Response) => {
            try {
              const count = await quantidadeAtorGenero (req.query.gênero as string);
              res.status(200).send({
                  quantity: count,
              })
            } catch (err:any) {
              res.status(400).send({
                message: err.message,
              });
            }
          });
          // Para ver algum resultado preciso alterar o valor de "gênero" na função.

          //EXERCÍCIO 04:

// PATH PARAMETERS

    app.put("/ator/:id", async (req: Request, res: Response) => {
        try {
          await connection("Atores")
          .update({
              salário: req.body.salário,
          })
          .where({id: req.params.id})
          res.status(200).send({
            message: "Salário Atualizado",
          });
        } catch (err:any) {
          res.status(400).send({
            message: err.message,
          });
        }
      });

    //SEGUNDA TENTATIVA - SEM SUCESSO TAMBÉM: 

    // const atualizarSalário = async (id: string, salário: number): Promise<any> => {
    //         await connection("Atores")
    //           .update({
    //             salário: salário,
    //           })
    //           .where("id", id);
    //       }; 

        // app.put("/ator", async (req: Request, res: Response) => {
        //     try {
        //       await atualizarSalário(req.body.id, req.body.salary);
        //       res.status(200).send({
        //         message: "Success",
        //       });
        //     } catch (err:any) {
        //       res.status(400).send({
        //         message: err.message,
        //       });
        //     }
        //   });

    //B) PATH PARAMETERS

    app.delete("/ator/:id", async (req, res) => {
        try {
            await connection("Atores")
            .delete()
            .where({id: req.params.id})
            res.status(200).send("O Ator foi excluído com sucesso");
        } catch (error) {
            res.status(500).send("Ocorreu um erro inesperado!");
        }
    })

    //DEU CERTO!!!!

    //INSERIR NOVO ATOR - RAW:
    app.post("/criar", (req,res) => {
        try {
            connection.raw(`
            INSERT INTO Atores (id, nome, salário, aniversário, gênero)
            VALUES (
                "${req.body.id}",
                "${req.body.nome}",
                ${req.body.salário},
                "${req.body.aniversário}",
                "${req.body.gênero}"
            );
            `);
            res.status(201).send("O ator foi criado com sucesso!")
        } catch (error: any) {
            res.status(500).send("Ocorreu um erro inesperado!");
        }
        }
    );

    // "id": "005",
    //     "nome": "Fernanda Montenegro",
    //     "salário": 600000,
    //     "aniversário": "1938-02-10T03:00:00.000Z",
    //     "gênero": "female"