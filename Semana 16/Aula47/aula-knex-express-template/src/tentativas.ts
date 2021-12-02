// const quantidadeAtorGênero = async (gênero: string): Promise<any> => {
//     const resultado = await connection.raw(`
//     SELECT COUNT(*) FROM Atores WHERE gênero = "${gênero}"
//      `)
//     return resultado[0]; 
//     };

//     app.get("/atores/:gênero", async (req: Request, res: Response) => {
//         try {
//           const gênero = req.query.gênero as string 
//           if(gênero) {
//               console.log(await quantidadeAtorGênero(gênero));
//           }
//           res.end()
//         } catch (error:any) {
//             console.log(error.message)
//           res.status(500).send("Erro inesperado")
//           }
//         });