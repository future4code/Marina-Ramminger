import { Request, Response } from "express"
import { type } from "os"
import { connection } from "../data/connection"
import { user } from "../types"


//EXERCÍCIO 1: 

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//    try {
//       const name = req.query.name || "%"
//       const result = await connection("aula49_exercicio")
//       .where("name", "LIKE", `%${name}%`)
//       const users = result.map(selectAllUsers)

//       if(!users.length){
//          res.statusCode = 404
//          throw new Error("No users found")
//       }

//       res.status(200).send(users)
      
//    } catch (error:any) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// }

const selectAllUsers = (input: any): user => {
    return {
       id: input.id,
       name: input.name,
       email: input.email,
       type: input.type,
    }
}

// EXERCÍCIO 2:

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//    try {
//       const name = req.query.name || "%"
//       const type = req.query.type || "%"
//       const sort = req.query.sort === "name" ? "name" : "email"
//       const order = req.query.order === "DESC" ? "DESC" : "ASC"
      
   
//       const users = await connection("aula49_exercicio")
//       .where("name", "LIKE", `%${name}%`)
//       .andWhere("type", "LIKE", `${type}`)
//       .orderBy(sort, order)

//       const result = users.map(selectAllUsers)

//       if(!users.length){
//          res.statusCode = 404
//          throw new Error("No users found")
//       }
   
//       res.status(200).send(result)
   
      
//    } catch (error:any) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// }

// EXERCÍCIO 3:
// Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, 
//e permita que o usuário possa passar a página que deseja ver. O número da página deve ser passado por query params.

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//    try {
//       const name = req.query.name || "%"
//       const sort = req.query.sort === "name" ? "name" : "email"
//       const order = req.query.order === "DESC" ? "DESC" : "ASC"
//       const page = Number(req.query.page) || 1
//       const offset = 5 * (page - 1)

//       const result = await connection("aula49_exercicio")
//       .where("name", "LIKE", `%${name}%`)
//       .orderBy(sort, order)
//       .limit(5)
//       .offset(offset)

//       const users = result.map(selectAllUsers)

//       if(!users.length){
//          res.statusCode = 404
//          throw new Error("No users found")
//       }

//       res.status(200).send(users)
      
//    } catch (error:any) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// }

// EXERCÍCIO 04:

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const name = req.query.name || "%"
      const type = req.query.type || "%"
      const sort = req.query.sort === "name" ? "name" : "email"
      const order = req.query.order === "DESC" ? "DESC" : "ASC"
      const page = Number(req.query.page) || 1 

      const result = await connection("aula49_exercicio")
      .where("name", "LIKE", `%${name}%`)
      .andWhere("type", "LIKE", `${type}`)
      .orderBy(sort, order)
      .limit(5)
      .offset(5 * (page - 1))

      const users = result.map(selectAllUsers)

      if(!name || !type) {
         const emptyQuery = await connection('aula49_exercicio')
         .select('*')
         .orderBy('name', 'DESC')
         res.status(200).send(emptyQuery)
     }

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
